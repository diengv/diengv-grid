import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../../../core/structure/paging/src/api/paging.publisher";
import * as i3 from "@generic-ui/fabric";
export class AlternativePagingNavigatorComponent extends PureComponent {
    constructor(elRef, structureId, pagingCommandInvoker) {
        super(elRef);
        this.structureId = structureId;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    ngOnChanges() {
        this.calculatePrev();
        this.calculateNext();
    }
    prevPage() {
        this.prevPageChanged.emit();
    }
    nextPage() {
        this.nextPageChanged.emit();
    }
    firstPage() {
        this.pagingCommandInvoker.goToPage(1, this.paging.getPage(), this.structureId);
    }
    lastPage() {
        const numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandInvoker.goToPage(numberOfPages, this.paging.getPage(), this.structureId);
    }
    getSelectorName() {
        return 'gui-paging-alternative-navigator';
    }
    calculatePrev() {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    }
    calculateNext() {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled();
    }
}
AlternativePagingNavigatorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: AlternativePagingNavigatorComponent, deps: [{ token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.PagingPublisher }], target: i0.ɵɵFactoryTarget.Component });
AlternativePagingNavigatorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: AlternativePagingNavigatorComponent, selector: "div[gui-paging-alternative-navigator][paging][sourceSize]", inputs: { paging: "paging", sourceSize: "sourceSize" }, outputs: { nextPageChanged: "nextPageChanged", prevPageChanged: "prevPageChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n", dependencies: [{ kind: "component", type: i3.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: AlternativePagingNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-paging-alternative-navigator][paging][sourceSize]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<button (click)=\"firstPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(-522.98 669.601) rotate(180)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n\n<button (click)=\"prevPage()\"\n\t\t[disabled]=\"prevDisabled\"\n\t\tclass=\"gui-paging-navigator-prev\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(5.77 10.351) rotate(180)\"/>\n\t</svg>\n</button>\n\n<ng-content></ng-content>\n\n<button (click)=\"nextPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tclass=\"gui-paging-navigator-next\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t  stroke-width=\"1.5\" transform=\"translate(0.311 0.311)\"/>\n\t</svg>\n</button>\n\n<button (click)=\"lastPage()\"\n\t\t[disabled]=\"nextDisabled\"\n\t\tgui-button>\n\t<svg height=\"10.661\" viewBox=\"0 0 11.081 10.661\" width=\"11.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g transform=\"translate(534.061 -658.939)\">\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n\t\t\t\t  stroke-width=\"1.5\" transform=\"translate(-533.75 659.25)\"/>\n\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-528.75 659.25)\"/>\n\t\t</g>\n\t</svg>\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.PagingPublisher }]; }, propDecorators: { paging: [{
                type: Input
            }], sourceSize: [{
                type: Input
            }], nextPageChanged: [{
                type: Output
            }], prevPageChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYWR2YW5jZWQvbmF2aWdhdG9yL2FsdGVybmF0aXZlLXBhZ2luZy1uYXZpZ2F0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FkdmFuY2VkL25hdmlnYXRvci9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdFQUFnRSxDQUFDOzs7OztBQVUvRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsYUFBYTtJQWtCckUsWUFBWSxLQUFpQixFQUNULFdBQXdCLEVBQ3hCLG9CQUFxQztRQUN4RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGTSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWlCO1FBWHpELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFNOUIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsUUFBUTtRQUNQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDO0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU8sYUFBYTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Z0lBbEVXLG1DQUFtQztvSEFBbkMsbUNBQW1DLDBSQ2RoRCwrcEVBK0NBOzJGRGpDYSxtQ0FBbUM7a0JBTi9DLFNBQVM7K0JBQ0MsMkRBQTJELG1CQUVwRCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO3lKQUtyQyxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLGVBQWU7c0JBRGQsTUFBTTtnQkFJUCxlQUFlO3NCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL2FwaS9tb2RlbC9wYWdpbmcubW9kZWwnO1xuaW1wb3J0IHsgUGFnaW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9hcGkvcGFnaW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktcGFnaW5nLWFsdGVybmF0aXZlLW5hdmlnYXRvcl1bcGFnaW5nXVtzb3VyY2VTaXplXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9hbHRlcm5hdGl2ZS1wYWdpbmctbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWx0ZXJuYXRpdmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IFBhZ2luZ01vZGVsO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZVNpemU6IG51bWJlcjtcblxuXHRAT3V0cHV0KClcblx0bmV4dFBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwcmV2UGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJldkRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0bmV4dERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdQdWJsaXNoZXIpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZVByZXYoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZU5leHQoKTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMucHJldlBhZ2VDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdHRoaXMubmV4dFBhZ2VDaGFuZ2VkLmVtaXQoKTtcblx0fVxuXG5cdGZpcnN0UGFnZSgpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyLmdvVG9QYWdlKDEsIHRoaXMucGFnaW5nLmdldFBhZ2UoKSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRsYXN0UGFnZSgpOiB2b2lkIHtcblx0XHRjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnaW5nLmdldFBhZ2VTaXplKCkpO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIuZ29Ub1BhZ2UobnVtYmVyT2ZQYWdlcywgdGhpcy5wYWdpbmcuZ2V0UGFnZSgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1wYWdpbmctYWx0ZXJuYXRpdmUtbmF2aWdhdG9yJztcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlUHJldigpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5wYWdpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnByZXZEaXNhYmxlZCA9IHRoaXMucGFnaW5nLmlzUHJldlBhZ2VEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVOZXh0KCk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnBhZ2luZyAmJiAhdGhpcy5zb3VyY2VTaXplKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5uZXh0RGlzYWJsZWQgPSB0aGlzLnBhZ2luZy5pc05leHRQYWdlRGlzYWJsZWQoKTtcblx0fVxuXG59XG4iLCI8YnV0dG9uIChjbGljayk9XCJmaXJzdFBhZ2UoKVwiXG5cdFx0W2Rpc2FibGVkXT1cInByZXZEaXNhYmxlZFwiXG5cdFx0Z3VpLWJ1dHRvbj5cblx0PHN2ZyBoZWlnaHQ9XCIxMC42NjFcIiB2aWV3Qm94PVwiMCAwIDExLjA4MSAxMC42NjFcIiB3aWR0aD1cIjExLjA4MVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUyMi45OCA2NjkuNjAxKSByb3RhdGUoMTgwKVwiPlxuXHRcdFx0PHBhdGggZD1cIk0uNzUuNzUsNS4wMiw1LjAyLjc1LDkuMjlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdCAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MzMuNzUgNjU5LjI1KVwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNLjc1Ljc1LDUuMDIsNS4wMi43NSw5LjI5XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0ICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTI4Ljc1IDY1OS4yNSlcIi8+XG5cdFx0PC9nPlxuXHQ8L3N2Zz5cbjwvYnV0dG9uPlxuXG48YnV0dG9uIChjbGljayk9XCJwcmV2UGFnZSgpXCJcblx0XHRbZGlzYWJsZWRdPVwicHJldkRpc2FibGVkXCJcblx0XHRjbGFzcz1cImd1aS1wYWdpbmctbmF2aWdhdG9yLXByZXZcIlxuXHRcdGd1aS1idXR0b24+XG5cdDxzdmcgaGVpZ2h0PVwiMTAuNjYxXCIgdmlld0JveD1cIjAgMCA2LjA4MSAxMC42NjFcIiB3aWR0aD1cIjYuMDgxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoIGQ9XCJNLjc1Ljc1LDUuMDIsNS4wMi43NSw5LjI5XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0ICBzdHJva2Utd2lkdGg9XCIxLjVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNS43NyAxMC4zNTEpIHJvdGF0ZSgxODApXCIvPlxuXHQ8L3N2Zz5cbjwvYnV0dG9uPlxuXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cbjxidXR0b24gKGNsaWNrKT1cIm5leHRQYWdlKClcIlxuXHRcdFtkaXNhYmxlZF09XCJuZXh0RGlzYWJsZWRcIlxuXHRcdGNsYXNzPVwiZ3VpLXBhZ2luZy1uYXZpZ2F0b3ItbmV4dFwiXG5cdFx0Z3VpLWJ1dHRvbj5cblx0PHN2ZyBoZWlnaHQ9XCIxMC42NjFcIiB2aWV3Qm94PVwiMCAwIDYuMDgxIDEwLjY2MVwiIHdpZHRoPVwiNi4wODFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHBhdGggZD1cIk0uNzUuNzUsNS4wMiw1LjAyLjc1LDkuMjlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHQgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjMxMSAwLjMxMSlcIi8+XG5cdDwvc3ZnPlxuPC9idXR0b24+XG5cbjxidXR0b24gKGNsaWNrKT1cImxhc3RQYWdlKClcIlxuXHRcdFtkaXNhYmxlZF09XCJuZXh0RGlzYWJsZWRcIlxuXHRcdGd1aS1idXR0b24+XG5cdDxzdmcgaGVpZ2h0PVwiMTAuNjYxXCIgdmlld0JveD1cIjAgMCAxMS4wODEgMTAuNjYxXCIgd2lkdGg9XCIxMS4wODFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUzNC4wNjEgLTY1OC45MzkpXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTS43NS43NSw1LjAyLDUuMDIuNzUsOS4yOVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0ICBzdHJva2Utd2lkdGg9XCIxLjVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUzMy43NSA2NTkuMjUpXCIvPlxuXHRcdFx0PHBhdGggZD1cIk0uNzUuNzUsNS4wMiw1LjAyLjc1LDkuMjlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHQgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MjguNzUgNjU5LjI1KVwiLz5cblx0XHQ8L2c+XG5cdDwvc3ZnPlxuPC9idXR0b24+XG4iXX0=