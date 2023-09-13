import { ChangeDetectionStrategy, Component, ElementRef, Inject, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { structureParentComponent } from '../../structure-parent-component';
import { StyleModifier } from '../../../../../feature/common/src/cdk/component/lib/src/dom/style/style-modifier';
import { fromRxJsObservable, hermesDistinctUntilChanged, hermesFilter, hermesFromEvent, hermesMap, HermesSubject, hermesTakeUntil, toRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../../core/structure/structure-core/src/api/structure.publisher";
import * as i4 from "../../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i5 from "../../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse";
import * as i6 from "../../../../../core/structure/source/src/api/source.warehouse";
import * as i7 from "../../../../../core/composition/src/api/composition.publisher";
import * as i8 from "../../../../../core/composition/src/api/composition.warehouse";
import * as i9 from "../../../../../feature/composition/src/column/composition.template-warehouse";
import * as i10 from "../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i11 from "../../../../../feature/common/src/cdk/resize-detector/resize.detector";
import * as i12 from "../../../../../core/structure/structure-core/src/api/ready/structure.initial-values-ready.archive";
import * as i13 from "../structure-content.component";
export class StructureContainerComponent extends SmartComponent {
    constructor(changeDetectorRef, elRef, ngZone, structureId, compositionId, structureCommandService, structureWarehouse, verticalFormationWarehouse, sourceWarehouse, compositionCommandInvoker, compositionWarehouse, compositionTemplateWarehouse, formationWarehouse, resizeDetector, structureInitialValuesReadyArchive, structureParent) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.ngZone = ngZone;
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCommandService = structureCommandService;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.sourceWarehouse = sourceWarehouse;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.compositionTemplateWarehouse = compositionTemplateWarehouse;
        this.formationWarehouse = formationWarehouse;
        this.resizeDetector = resizeDetector;
        this.structureInitialValuesReadyArchive = structureInitialValuesReadyArchive;
        this.structureParent = structureParent;
        this.columns = [];
        this.source = [];
        this.autoResizeWidthEnabled = false;
        this.scrollObservation$ = new HermesSubject();
        this.styleModifier = new StyleModifier(this.elRef.nativeElement);
    }
    ngOnInit() {
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onContainerHeight(this.structureId), (containerHeight) => {
            this.setContainerHeight(containerHeight);
        });
        this.subscribe(fromRxJsObservable(toRxJsObservable(this.structureInitialValuesReadyArchive.once(this.structureId))
            .pipe(flatMap(() => {
            return combineLatest(toRxJsObservable(this.sourceWarehouse.onItems(this.structureId)), toRxJsObservable(this.compositionTemplateWarehouse.onTemplateCols(this.compositionId)));
        }))), (arr) => {
            this.source = arr[0];
            this.columns = arr[1];
        });
        this.subscribeWithoutRender(this.compositionWarehouse.onResizeWidth(this.compositionId), (enabled) => {
            this.autoResizeWidthEnabled = enabled;
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // turn on when structure is ready
        if (this.structureParent) {
            this.subscribeWithoutRender(this.resizeDetector
                .on(this.structureParent.getElementRef().nativeElement)
                .pipe(hermesFilter(() => this.autoResizeWidthEnabled), hermesMap((size) => size.width), hermesDistinctUntilChanged()), (width) => {
                this.recalculateContainer(width);
            });
        }
        this.subscribeWithoutRender(this.compositionWarehouse.onContainerWidth(this.compositionId), (width) => {
            this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setWidth(width);
        });
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onEnabled(this.structureId), (enabled) => {
            if (enabled) {
                this.enableScrollObservation();
            }
            else {
                this.disableScrollObservation();
            }
        });
        this.subscribeWithoutRender(this.structureWarehouse
            .on(this.structureId)
            .pipe(hermesFilter((str) => {
            return str.isVerticalScrollEnabled();
        })), (structure) => {
            const topMargin = structure.getTopMargin(), sourceHeight = structure.getSourceHeight();
            this.setSourceHeight(topMargin, sourceHeight);
        });
        this.subscribeWithoutRender(this.verticalFormationWarehouse.onScrollBarPosition(this.structureId), (scrollPosition) => {
            this.elRef.nativeElement.scrollTop = scrollPosition;
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.resizeDetector.destroy(this.elRef.nativeElement);
    }
    getSelectorName() {
        return 'gui-structure-container';
    }
    setContainerHeight(height) {
        this.height = height;
        this.styleModifier.getHost().setHeight(height);
    }
    setSourceHeight(topMargin, sourceHeight) {
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setPaddingTop(topMargin);
        this.styleModifier.getElement(this.sourceCollectionRef.nativeElement).setHeight(sourceHeight);
    }
    recalculateContainer(width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandInvoker.setContainerWidth(width, this.compositionId);
        }
    }
    enableScrollObservation() {
        this.ngZone
            .runOutsideAngular(() => {
            hermesFromEvent(this.elRef.nativeElement, 'scroll')
                .pipe(hermesTakeUntil(this.scrollObservation$))
                .subscribe((event) => {
                const scrollTop = event.target.scrollTop;
                this.structureCommandService.setScrollPosition(scrollTop, this.structureId);
            });
        });
    }
    disableScrollObservation() {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    }
}
StructureContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureContainerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.StructureId }, { token: i2.CompositionId }, { token: i3.StructurePublisher }, { token: i4.StructureWarehouse }, { token: i5.VerticalFormationWarehouse }, { token: i6.SourceWarehouse }, { token: i7.CompositionPublisher }, { token: i8.CompositionWarehouse }, { token: i9.CompositionTemplateWarehouse }, { token: i10.FormationWarehouse }, { token: i11.ResizeDetector }, { token: i12.StructureInitialValuesReadyArchive }, { token: structureParentComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
StructureContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: StructureContainerComponent, selector: "div[gui-structure-container]", viewQueries: [{ propertyName: "sourceCollectionRef", first: true, predicate: ["sourceCollection"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "component", type: i13.StructureContentComponent, selector: "div[gui-structure-content]", inputs: ["source", "columns"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: StructureContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-container]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div #sourceCollection\n\t class=\"gui-h-full gui-w-full gui-absolute gui-structure-container-element\">\n\n\t<div [columns]=\"columns\" [source]=\"source\"\n\t\t gui-structure-content>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.StructurePublisher }, { type: i4.StructureWarehouse }, { type: i5.VerticalFormationWarehouse }, { type: i6.SourceWarehouse }, { type: i7.CompositionPublisher }, { type: i8.CompositionWarehouse }, { type: i9.CompositionTemplateWarehouse }, { type: i10.FormationWarehouse }, { type: i11.ResizeDetector }, { type: i12.StructureInitialValuesReadyArchive }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [structureParentComponent]
                }] }]; }, propDecorators: { sourceCollectionRef: [{
                type: ViewChild,
                args: ['sourceCollection', { read: ElementRef, static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2NvbnRlbnQvY29udGFpbmVyL3N0cnVjdHVyZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb250ZW50L2NvbnRhaW5lci9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBSU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBU3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSTVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUNqSCxPQUFPLEVBQ04sa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMxQixZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjNUIsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFtQjlELFlBQVksaUJBQW9DLEVBQzVCLEtBQWlCLEVBQ2pC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LENBQUMsSUFBSTs7MEJBb0NqQyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLHdCQUF3Qjs0Q0EvQnRDLG1CQUFtQjtzQkFEM0IsU0FBUzt1QkFBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3QsXG5cdE5nWm9uZSxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE9wdGlvbmFsLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL2l0ZW0vaXRlbSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3R5bGVNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyJztcbmltcG9ydCB7XG5cdGZyb21SeEpzT2JzZXJ2YWJsZSxcblx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQsXG5cdGhlcm1lc0ZpbHRlcixcblx0aGVybWVzRnJvbUV2ZW50LFxuXHRoZXJtZXNNYXAsXG5cdEhlcm1lc1N1YmplY3QsXG5cdGhlcm1lc1Rha2VVbnRpbCxcblx0dG9SeEpzT2JzZXJ2YWJsZVxufSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcmVhZHkvc3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUnO1xuaW1wb3J0IHsgT2JzZXJ2ZWRTaXplLCBSZXNpemVEZXRlY3RvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvcmVzaXplLWRldGVjdG9yL3Jlc2l6ZS5kZXRlY3Rvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFjY2Vzc29yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24uYWNjZXNzb3IubW9kZWwnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25UZW1wbGF0ZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi50ZW1wbGF0ZS13YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbnRhaW5lcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ3NvdXJjZUNvbGxlY3Rpb24nLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgc291cmNlQ29sbGVjdGlvblJlZj86IEVsZW1lbnRSZWY7XG5cblx0Y29sdW1uczogQXJyYXk8Q29tcG9zaXRpb25BY2Nlc3Nvck1vZGVsPiA9IFtdO1xuXG5cdHNvdXJjZTogQXJyYXk8SXRlbT4gPSBbXTtcblxuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0cHJpdmF0ZSBhdXRvUmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBzY3JvbGxPYnNlcnZhdGlvbiQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbmdab25lOiBOZ1pvbmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZVB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25QdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2U6IENvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVzaXplRGV0ZWN0b3I6IFJlc2l6ZURldGVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmU6IFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUsXG5cdFx0XHRcdEBPcHRpb25hbCgpIEBJbmplY3Qoc3RydWN0dXJlUGFyZW50Q29tcG9uZW50KSBwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVBhcmVudDogYW55KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsUmVmKTtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIgPSBuZXcgU3R5bGVNb2RpZmllcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uQ29udGFpbmVySGVpZ2h0KHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGNvbnRhaW5lckhlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0Q29udGFpbmVySGVpZ2h0KGNvbnRhaW5lckhlaWdodCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHR0b1J4SnNPYnNlcnZhYmxlKHRoaXMuc3RydWN0dXJlSW5pdGlhbFZhbHVlc1JlYWR5QXJjaGl2ZS5vbmNlKHRoaXMuc3RydWN0dXJlSWQpKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0ZmxhdE1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lTGF0ZXN0KFxuXHRcdFx0XHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zb3VyY2VXYXJlaG91c2Uub25JdGVtcyh0aGlzLnN0cnVjdHVyZUlkKSksXG5cdFx0XHRcdFx0XHRcdFx0dG9SeEpzT2JzZXJ2YWJsZSh0aGlzLmNvbXBvc2l0aW9uVGVtcGxhdGVXYXJlaG91c2Uub25UZW1wbGF0ZUNvbHModGhpcy5jb21wb3NpdGlvbklkKSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdChhcnI6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IGFyclswXSBhcyBBcnJheTxJdGVtPjtcblx0XHRcdFx0dGhpcy5jb2x1bW5zID0gYXJyWzFdIGFzIEFycmF5PENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbD47XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Uub25SZXNpemVXaWR0aCh0aGlzLmNvbXBvc2l0aW9uSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5hdXRvUmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0c3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cblx0XHQvLyB0dXJuIG9uIHdoZW4gc3RydWN0dXJlIGlzIHJlYWR5XG5cdFx0aWYgKHRoaXMuc3RydWN0dXJlUGFyZW50KSB7XG5cblx0XHRcdHRoaXMuc3Vic2NyaWJlV2l0aG91dFJlbmRlcihcblx0XHRcdFx0dGhpcy5yZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdC5vbih0aGlzLnN0cnVjdHVyZVBhcmVudC5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudClcblx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdGhlcm1lc0ZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpLFxuXHRcdFx0XHRcdFx0aGVybWVzTWFwKChzaXplOiBPYnNlcnZlZFNpemUpID0+IHNpemUud2lkdGgpLFxuXHRcdFx0XHRcdFx0aGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdCh3aWR0aDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbnRhaW5lcih3aWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZS5vbkNvbnRhaW5lcldpZHRoKHRoaXMuY29tcG9zaXRpb25JZCksXG5cdFx0XHQod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0V2lkdGgod2lkdGgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZVdpdGhvdXRSZW5kZXIoXG5cdFx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLm9uRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGVTY3JvbGxPYnNlcnZhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVXYXJlaG91c2Vcblx0XHRcdFx0Lm9uKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGhlcm1lc0ZpbHRlcigoc3RyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3RyLmlzVmVydGljYWxTY3JvbGxFbmFibGVkKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHtcblxuXHRcdFx0XHRjb25zdCB0b3BNYXJnaW4gPSBzdHJ1Y3R1cmUuZ2V0VG9wTWFyZ2luKCksXG5cdFx0XHRcdFx0c291cmNlSGVpZ2h0ID0gc3RydWN0dXJlLmdldFNvdXJjZUhlaWdodCgpO1xuXG5cdFx0XHRcdHRoaXMuc2V0U291cmNlSGVpZ2h0KHRvcE1hcmdpbiwgc291cmNlSGVpZ2h0KTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmVXaXRob3V0UmVuZGVyKFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZS5vblNjcm9sbEJhclBvc2l0aW9uKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNjcm9sbFBvc2l0aW9uOiBudW1iZXIpID0+IHtcblxuXHRcdFx0XHR0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb247XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdFx0dGhpcy5yZXNpemVEZXRlY3Rvci5kZXN0cm95KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWNvbnRhaW5lcic7XG5cdH1cblxuXHRwcml2YXRlIHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0SGVpZ2h0KGhlaWdodCk7XG5cdH1cblxuXHRwcml2YXRlIHNldFNvdXJjZUhlaWdodCh0b3BNYXJnaW46IG51bWJlciwgc291cmNlSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnN0eWxlTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLnNvdXJjZUNvbGxlY3Rpb25SZWYubmF0aXZlRWxlbWVudCkuc2V0UGFkZGluZ1RvcCh0b3BNYXJnaW4pO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuc291cmNlQ29sbGVjdGlvblJlZi5uYXRpdmVFbGVtZW50KS5zZXRIZWlnaHQoc291cmNlSGVpZ2h0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb250YWluZXIod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmF1dG9SZXNpemVXaWR0aEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb250YWluZXJXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGVuYWJsZVNjcm9sbE9ic2VydmF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMubmdab25lXG5cdFx0XHQucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHRcdGhlcm1lc0Zyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0aGVybWVzVGFrZVVudGlsKHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LnRhcmdldC5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNhYmxlU2Nyb2xsT2JzZXJ2YXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5zY3JvbGxPYnNlcnZhdGlvbiQubmV4dCgpO1xuXHRcdHRoaXMuc2Nyb2xsT2JzZXJ2YXRpb24kLmNvbXBsZXRlKCk7XG5cdH1cblxufVxuIiwiPGRpdiAjc291cmNlQ29sbGVjdGlvblxuXHQgY2xhc3M9XCJndWktaC1mdWxsIGd1aS13LWZ1bGwgZ3VpLWFic29sdXRlIGd1aS1zdHJ1Y3R1cmUtY29udGFpbmVyLWVsZW1lbnRcIj5cblxuXHQ8ZGl2IFtjb2x1bW5zXT1cImNvbHVtbnNcIiBbc291cmNlXT1cInNvdXJjZVwiXG5cdFx0IGd1aS1zdHJ1Y3R1cmUtY29udGVudD5cblx0PC9kaXY+XG5cbjwvZGl2PlxuIl19