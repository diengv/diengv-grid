import { CellTemplateWithContext } from '../../../../core/composition/src/core-read/definition/cell-template-with-context';
export class CompositionTemplateModel extends CellTemplateWithContext {
    constructor(viewTemplate = null, editTemplate = null, context) {
        super(context.getHeader(), context.getDataType(), context.context, context.width, context.getFieldId(), context.getColumnDefinitionId(), context.getSortStatus(), context.isEnabled(), context.getCssClasses(), context.getStyles(), context.isSortEnabled(), context.getAlign());
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24udGVtcGxhdGUubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi50ZW1wbGF0ZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUUzSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsdUJBQXVCO0lBRXBFLFlBQW1CLGVBQXdDLElBQUksRUFDckQsZUFBd0MsSUFBSSxFQUNuRCxPQUFnQztRQUNsQyxLQUFLLENBQ0osT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUNuQixPQUFPLENBQUMsV0FBVyxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLEtBQUssRUFDYixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQ3BCLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxFQUMvQixPQUFPLENBQUMsYUFBYSxFQUFFLEVBQ3ZCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFDbkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUN2QixPQUFPLENBQUMsU0FBUyxFQUFFLEVBQ25CLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFDdkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUNsQixDQUFDO1FBaEJnQixpQkFBWSxHQUFaLFlBQVksQ0FBZ0M7UUFDckQsaUJBQVksR0FBWixZQUFZLENBQWdDO0lBZ0J0RCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvblRlbXBsYXRlTW9kZWwgZXh0ZW5kcyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHZpZXdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwgPSBudWxsLFxuXHRcdFx0XHRwdWJsaWMgZWRpdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGwsXG5cdFx0XHRcdGNvbnRleHQ6IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjb250ZXh0LmdldEhlYWRlcigpLFxuXHRcdFx0Y29udGV4dC5nZXREYXRhVHlwZSgpLFxuXHRcdFx0Y29udGV4dC5jb250ZXh0LFxuXHRcdFx0Y29udGV4dC53aWR0aCxcblx0XHRcdGNvbnRleHQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0Y29udGV4dC5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSxcblx0XHRcdGNvbnRleHQuZ2V0U29ydFN0YXR1cygpLFxuXHRcdFx0Y29udGV4dC5pc0VuYWJsZWQoKSxcblx0XHRcdGNvbnRleHQuZ2V0Q3NzQ2xhc3NlcygpLFxuXHRcdFx0Y29udGV4dC5nZXRTdHlsZXMoKSxcblx0XHRcdGNvbnRleHQuaXNTb3J0RW5hYmxlZCgpLFxuXHRcdFx0Y29udGV4dC5nZXRBbGlnbigpXG5cdFx0KTtcblx0fVxufVxuIl19