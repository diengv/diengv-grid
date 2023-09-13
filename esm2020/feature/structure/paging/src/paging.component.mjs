import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../common/src/cdk/component/lib/src/smart-component';
import { PagingDisplayMode } from './mode/paging-display-mode';
import { PagingPosition } from './paging-position';
import { StreamCloser } from '../../../../common/src/cdk/reactive/stream-closer';
import { CssClass } from '../../common/src/css-class/css-class';
import * as i0 from "@angular/core";
import * as i1 from "../../common/src/css-class/css-class.modifier";
import * as i2 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../core/structure/paging/src/api/paging.warehouse";
import * as i4 from "../../../../core/structure/paging/src/api/paging.publisher";
import * as i5 from "../../../../core/structure/source/src/api/source.warehouse";
import * as i6 from "./mode/paging-display-mode.archive";
import * as i7 from "@angular/common";
import * as i8 from "./basic/navigator/paging-navigator.component";
import * as i9 from "./select/paging-select.component";
import * as i10 from "./basic/stats/paging-stats.component";
import * as i11 from "./advanced/navigator/alternative-paging-navigator.component";
import * as i12 from "./advanced/pages/alternative-paging-pages.component";
export class PagingComponent extends SmartComponent {
    constructor(elRef, changeDetectorRef, cssClassModifier, structureId, pagingWarehouse, pagingCommandInvoker, sourceWarehouse, pagingDisplayModeArchive) {
        super(changeDetectorRef, elRef);
        this.elRef = elRef;
        this.cssClassModifier = cssClassModifier;
        this.structureId = structureId;
        this.pagingWarehouse = pagingWarehouse;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.sourceWarehouse = sourceWarehouse;
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
        this.alternativeDisplay = false;
        this.isPagingVisible = false;
        this.localStreamCloser = new StreamCloser();
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-justify-end');
        this.addClassToHost('gui-items-center');
        this.addClassToHost('gui-p-4');
    }
    ngOnChanges(changes) {
        if (changes.position) {
            if (this.position === PagingPosition.BOTTOM) {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
            }
            else {
                this.cssClassModifier.remove(this.elRef.nativeElement, CssClass.PAGING_BOTTOM_CLASS_NAME);
                this.cssClassModifier.add(this.elRef.nativeElement, CssClass.PAGING_TOP_CLASS_NAME);
            }
        }
    }
    ngOnInit() {
        this.subscribe(this.pagingDisplayModeArchive.on(), (mode) => {
            this.alternativeDisplay = mode === PagingDisplayMode.ADVANCED;
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.paging = paging;
            this.calculatePagingVisibility();
        });
        this.subscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.sourceSize = size;
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    changePageSize(pageSize) {
        this.pagingCommandInvoker.changePageSize(pageSize, this.structureId);
    }
    nextPage() {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandInvoker.nextPage(this.structureId);
    }
    prevPage() {
        this.pagingCommandInvoker.prevPage(this.structureId);
    }
    getSelectorName() {
        return 'gui-paging';
    }
    calculatePagingVisibility() {
        this.isPagingVisible = this.paging && this.paging.isEnabled() &&
            (((this.position === PagingPosition.TOP) && this.paging.isPagerTop()) ||
                ((this.position === PagingPosition.BOTTOM) && this.paging.isPagerBottom()));
    }
}
PagingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PagingComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.CssClassModifier }, { token: i2.StructureId }, { token: i3.PagingWarehouse }, { token: i4.PagingPublisher }, { token: i5.SourceWarehouse }, { token: i6.PagingDisplayModeArchive }], target: i0.ɵɵFactoryTarget.Component });
PagingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: PagingComponent, selector: "div[gui-paging][position]", inputs: { position: "position", minimal: "minimal" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"isPagingVisible && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible && alternativeDisplay\">\n\n\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t [paging]=\"paging\"\n\t\t gui-paging-select>\n\t</div>\n\n\t<div (nextPageChanged)=\"nextPage()\"\n\t\t (prevPageChanged)=\"prevPage()\"\n\t\t [paging]=\"paging\"\n\t\t [sourceSize]=\"sourceSize\"\n\t\t class=\"gui-flex gui-p-0\"\n\t\t gui-paging-alternative-navigator>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t gui-paging-alternative-pages>\n\t\t</div>\n\n\t</div>\n\n</ng-container>\n", styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:#2224261a;font-size:14px}\n"], dependencies: [{ kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i8.PagingNavigatorComponent, selector: "div[gui-paging-navigator][paging]", inputs: ["paging", "sourceSize"], outputs: ["nextPageChanged", "prevPageChanged"] }, { kind: "component", type: i9.PagingSelectComponent, selector: "div[gui-paging-select][paging]", inputs: ["paging"], outputs: ["pageSizeChanged"] }, { kind: "component", type: i10.PagingStatsComponent, selector: "div[gui-paging-stats][paging]", inputs: ["paging"] }, { kind: "component", type: i11.AlternativePagingNavigatorComponent, selector: "div[gui-paging-alternative-navigator][paging][sourceSize]", inputs: ["paging", "sourceSize"], outputs: ["nextPageChanged", "prevPageChanged"] }, { kind: "component", type: i12.AlternativePagingPagesComponent, selector: "div[gui-paging-alternative-pages][paging]", inputs: ["paging", "sourceSize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: PagingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging][position]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"isPagingVisible && !alternativeDisplay\">\n\n\t<ng-container *ngIf=\"!minimal; else minimalTemplate\">\n\n\t\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t\t [paging]=\"paging\"\n\t\t\t gui-paging-select>\n\t\t</div>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #minimalTemplate>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t gui-paging-stats>\n\t\t</div>\n\n\t\t<div (nextPageChanged)=\"nextPage()\"\n\t\t\t (prevPageChanged)=\"prevPage()\"\n\t\t\t [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t gui-paging-navigator>\n\t\t</div>\n\n\t</ng-template>\n\n</ng-container>\n\n<ng-container *ngIf=\"isPagingVisible && alternativeDisplay\">\n\n\t<div (pageSizeChanged)=\"changePageSize($event)\"\n\t\t [paging]=\"paging\"\n\t\t gui-paging-select>\n\t</div>\n\n\t<div (nextPageChanged)=\"nextPage()\"\n\t\t (prevPageChanged)=\"prevPage()\"\n\t\t [paging]=\"paging\"\n\t\t [sourceSize]=\"sourceSize\"\n\t\t class=\"gui-flex gui-p-0\"\n\t\t gui-paging-alternative-navigator>\n\n\t\t<div [paging]=\"paging\"\n\t\t\t [sourceSize]=\"sourceSize\"\n\t\t\t class=\"gui-flex gui-justify-center\"\n\t\t\t gui-paging-alternative-pages>\n\t\t</div>\n\n\t</div>\n\n</ng-container>\n", styles: [".gui-paging-alternative-navigator .gui-button{-ms-flex-line-pack:center;align-content:center;background:transparent;display:-ms-flexbox;display:flex;font-size:14px;line-height:21px;margin:0 2px;padding:0}.gui-paging-alternative-navigator .gui-button svg{-ms-flex-item-align:center;align-self:center;height:12px;margin:-1px 2px 0;width:auto}.gui-paging-alternative-navigator .gui-button svg path{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-paging-alternative-navigator .gui-button:hover{background:transparent}.gui-paging-alternative-navigator .gui-button:hover svg path{stroke:#333}.gui-paging-alternative-navigator .gui-button:disabled svg{opacity:.4}.gui-paging-alternative-navigator .gui-material .gui-button{padding:2px 16px}.gui-paging-alternative-pages{line-height:21px}.gui-paging-alternative-pages .gui-paging-page{display:none}.gui-paging-alternative-pages .gui-paging-visible-page .gui-paging-page{display:block;font-family:Arial,serif}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page{color:#333}.gui-paging-alternative-pages .gui-paging-visible-page.gui-paging-active-page .gui-paging-page{font-weight:700}.gui-paging-bottom{border-top:1px solid;border-top-color:inherit}.gui-paging-top{border-bottom:1px solid;border-bottom-color:inherit}\n", ".gui-generic .gui-paging,.gui-generic .gui-paging *{border-color:#2224261a;font-size:14px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.CssClassModifier }, { type: i2.StructureId }, { type: i3.PagingWarehouse }, { type: i4.PagingPublisher }, { type: i5.SourceWarehouse }, { type: i6.PagingDisplayModeArchive }]; }, propDecorators: { position: [{
                type: Input
            }], minimal: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9wYWdpbmcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL3BhZ2luZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBTzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWVoRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjO0lBa0JsRCxZQUE2QixLQUFpQixFQUMzQyxpQkFBb0MsRUFDbkIsZ0JBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLG9CQUFxQyxFQUNyQyxlQUFnQyxFQUNoQyx3QkFBa0Q7UUFDckUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBUkosVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUUxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNo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QUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVPLHlCQUF5QjtRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDNUQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OzRHQXRHVyxlQUFlO2dHQUFmLGVBQWUsbUtDNUI1Qix3N0NBOERBOzJGRGxDYSxlQUFlO2tCQVYzQixTQUFTOytCQUNDLDJCQUEyQixtQkFNcEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTsyVEFLckMsUUFBUTtzQkFEUCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBhZ2luZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvbW9kZWwvcGFnaW5nLm1vZGVsJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvcGFnaW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGUgfSBmcm9tICcuL21vZGUvcGFnaW5nLWRpc3BsYXktbW9kZSc7XG5pbXBvcnQgeyBQYWdpbmdQb3NpdGlvbiB9IGZyb20gJy4vcGFnaW5nLXBvc2l0aW9uJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgQ3NzQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uL2NvbW1vbi9zcmMvY3NzLWNsYXNzL2Nzcy1jbGFzcy5tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzcyB9IGZyb20gJy4uLy4uL2NvbW1vbi9zcmMvY3NzLWNsYXNzL2Nzcy1jbGFzcyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXBhZ2luZ11bcG9zaXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2luZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL3BhZ2luZy5jb21wb25lbnQuc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWUvZ2VuZXJpYy5wYWdpbmcuY29tcG9uZW50LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRwb3NpdGlvbiE6IFBhZ2luZ1Bvc2l0aW9uO1xuXG5cdEBJbnB1dCgpXG5cdG1pbmltYWw/OiBib29sZWFuO1xuXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRwYWdpbmc6IFBhZ2luZ01vZGVsO1xuXG5cdGFsdGVybmF0aXZlRGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGlzUGFnaW5nVmlzaWJsZSA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9jYWxTdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNzc0NsYXNzTW9kaWZpZXI6IENzc0NsYXNzTW9kaWZpZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ1dhcmVob3VzZTogUGFnaW5nV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1mbGV4Jyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWp1c3RpZnktZW5kJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWl0ZW1zLWNlbnRlcicpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTQnKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxQYWdpbmdDb21wb25lbnQ+KSB7XG5cblx0XHRpZiAoY2hhbmdlcy5wb3NpdGlvbikge1xuXG5cdFx0XHRpZiAodGhpcy5wb3NpdGlvbiA9PT0gUGFnaW5nUG9zaXRpb24uQk9UVE9NKSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfVE9QX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX0JPVFRPTV9DTEFTU19OQU1FKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3NzQ2xhc3NNb2RpZmllci5yZW1vdmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBDc3NDbGFzcy5QQUdJTkdfQk9UVE9NX0NMQVNTX05BTUUpO1xuXHRcdFx0XHR0aGlzLmNzc0NsYXNzTW9kaWZpZXIuYWRkKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgQ3NzQ2xhc3MuUEFHSU5HX1RPUF9DTEFTU19OQU1FKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5wYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChtb2RlOiBQYWdpbmdEaXNwbGF5TW9kZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmFsdGVybmF0aXZlRGlzcGxheSA9IG1vZGUgPT09IFBhZ2luZ0Rpc3BsYXlNb2RlLkFEVkFOQ0VEO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMucGFnaW5nV2FyZWhvdXNlLm9uUGFnaW5nKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHBhZ2luZzogUGFnaW5nTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdpbmcgPSBwYWdpbmc7XG5cdFx0XHRcdHRoaXMuY2FsY3VsYXRlUGFnaW5nVmlzaWJpbGl0eSgpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uT3JpZ2luU2l6ZSh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHRcdHN1cGVyLm5nT25EZXN0cm95KCk7XG5cdH1cblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRuZXh0UGFnZSgpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5uZXh0UGFnZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIucHJldlBhZ2UodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktcGFnaW5nJztcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUGFnaW5nVmlzaWJpbGl0eSgpOiB2b2lkIHtcblx0XHR0aGlzLmlzUGFnaW5nVmlzaWJsZSA9IHRoaXMucGFnaW5nICYmIHRoaXMucGFnaW5nLmlzRW5hYmxlZCgpICYmXG5cdFx0XHQoKCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5UT1ApICYmIHRoaXMucGFnaW5nLmlzUGFnZXJUb3AoKSkgfHxcblx0XHRcdFx0KCh0aGlzLnBvc2l0aW9uID09PSBQYWdpbmdQb3NpdGlvbi5CT1RUT00pICYmIHRoaXMucGFnaW5nLmlzUGFnZXJCb3R0b20oKSkpO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1BhZ2luZ1Zpc2libGUgJiYgIWFsdGVybmF0aXZlRGlzcGxheVwiPlxuXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCIhbWluaW1hbDsgZWxzZSBtaW5pbWFsVGVtcGxhdGVcIj5cblxuXHRcdDxkaXYgKHBhZ2VTaXplQ2hhbmdlZCk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQpXCJcblx0XHRcdCBbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFx0XHQgZ3VpLXBhZ2luZy1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHRcdCBndWktcGFnaW5nLXN0YXRzPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiAobmV4dFBhZ2VDaGFuZ2VkKT1cIm5leHRQYWdlKClcIlxuXHRcdFx0IChwcmV2UGFnZUNoYW5nZWQpPVwicHJldlBhZ2UoKVwiXG5cdFx0XHQgW3BhZ2luZ109XCJwYWdpbmdcIlxuXHRcdFx0IFtzb3VyY2VTaXplXT1cInNvdXJjZVNpemVcIlxuXHRcdFx0IGd1aS1wYWdpbmctbmF2aWdhdG9yPlxuXHRcdDwvZGl2PlxuXG5cdDwvbmctY29udGFpbmVyPlxuXG5cdDxuZy10ZW1wbGF0ZSAjbWluaW1hbFRlbXBsYXRlPlxuXG5cdFx0PGRpdiBbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFx0XHQgZ3VpLXBhZ2luZy1zdGF0cz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgKG5leHRQYWdlQ2hhbmdlZCk9XCJuZXh0UGFnZSgpXCJcblx0XHRcdCAocHJldlBhZ2VDaGFuZ2VkKT1cInByZXZQYWdlKClcIlxuXHRcdFx0IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHRcdCBbc291cmNlU2l6ZV09XCJzb3VyY2VTaXplXCJcblx0XHRcdCBndWktcGFnaW5nLW5hdmlnYXRvcj5cblx0XHQ8L2Rpdj5cblxuXHQ8L25nLXRlbXBsYXRlPlxuXG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUGFnaW5nVmlzaWJsZSAmJiBhbHRlcm5hdGl2ZURpc3BsYXlcIj5cblxuXHQ8ZGl2IChwYWdlU2l6ZUNoYW5nZWQpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG5cdFx0IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHQgZ3VpLXBhZ2luZy1zZWxlY3Q+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKG5leHRQYWdlQ2hhbmdlZCk9XCJuZXh0UGFnZSgpXCJcblx0XHQgKHByZXZQYWdlQ2hhbmdlZCk9XCJwcmV2UGFnZSgpXCJcblx0XHQgW3BhZ2luZ109XCJwYWdpbmdcIlxuXHRcdCBbc291cmNlU2l6ZV09XCJzb3VyY2VTaXplXCJcblx0XHQgY2xhc3M9XCJndWktZmxleCBndWktcC0wXCJcblx0XHQgZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1uYXZpZ2F0b3I+XG5cblx0XHQ8ZGl2IFtwYWdpbmddPVwicGFnaW5nXCJcblx0XHRcdCBbc291cmNlU2l6ZV09XCJzb3VyY2VTaXplXCJcblx0XHRcdCBjbGFzcz1cImd1aS1mbGV4IGd1aS1qdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHQgZ3VpLXBhZ2luZy1hbHRlcm5hdGl2ZS1wYWdlcz5cblx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=