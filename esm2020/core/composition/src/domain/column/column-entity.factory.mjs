import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from '../../api/column/column.id';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
export class ColumnEntityFactory {
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    create(source) {
        if (Array.isArray(source)) {
            return this.createColumns(source);
        }
        else {
            return this.createColumn(source);
        }
    }
    createColumn(params) {
        const columnConfig = params.getColumn(), field = params.getField(), dataType = field.getDataType(), width = this.convertWidth(columnConfig.width) || undefined;
        let view, enabled;
        if (columnConfig.view !== undefined) {
            view = new ViewEntity(columnConfig.view);
        }
        if (columnConfig.enabled !== undefined) {
            enabled = columnConfig.enabled;
        }
        else {
            enabled = true;
        }
        const presentation = this.getPresentation(dataType);
        const columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
        }
        return columnEntity;
    }
    createColumns(columns) {
        const columnEntities = [];
        columns.forEach((column) => {
            columnEntities.push(this.createColumn(column));
        });
        return columnEntities;
    }
    convertWidth(width) {
        return +width;
    }
    getPresentation(dataType) {
        return this.columnPresentationConverter.convert(dataType);
    }
}
ColumnEntityFactory.services = [ColumnPresentationConverter];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHM0YsTUFBTSxPQUFPLG1CQUFtQjtJQUUvQixZQUE2QiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUNyRixDQUFDO0lBTUQsTUFBTSxDQUFDLE1BQTBDO1FBRWhELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztJQUNGLENBQUM7SUFFTyxZQUFZLENBQUMsTUFBb0I7UUFFeEMsTUFBTSxZQUFZLEdBQWlCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDcEQsS0FBSyxHQUFnQixNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3RDLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7UUFFNUQsSUFBSSxJQUFnQixFQUNuQixPQUFnQixDQUFDO1FBRWxCLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7U0FDL0I7YUFBTTtZQUNOLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDZjtRQUVELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEQsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQ3BDLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQzlDLEtBQUssRUFDTCxZQUFZLEVBQ1osT0FBTyxFQUNQLFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxDQUFDLEtBQUssRUFDbEIsSUFBSSxFQUNKLEtBQUssQ0FDTCxDQUFDO1FBRUYsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxhQUFhLENBQUMsT0FBNEI7UUFFakQsTUFBTSxjQUFjLEdBQUcsRUFBeUIsQ0FBQztRQUVqRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQ3hDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFzQjtRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFrQjtRQUV6QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7QUF4RWUsNEJBQVEsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi9jb3JlL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGQgfSBmcm9tICcuL2ZpZWxkL2NvbHVtbi1maWVsZCc7XG5pbXBvcnQgeyBWaWV3RW50aXR5IH0gZnJvbSAnLi92aWV3LmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uLmNvbnZlcnRlcic7XG5cblxuZXhwb3J0IGNsYXNzIENvbHVtbkVudGl0eUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyOiBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXJdO1xuXG5cdGNyZWF0ZShwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eTtcblx0Y3JlYXRlKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT47XG5cdGNyZWF0ZShzb3VyY2U6IENvbHVtblBhcmFtcyB8IEFycmF5PENvbHVtblBhcmFtcz4pOiBDb2x1bW5FbnRpdHkgfCBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUNvbHVtbnMoc291cmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1uKHNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb2x1bW4ocGFyYW1zOiBDb2x1bW5QYXJhbXMpOiBDb2x1bW5FbnRpdHkge1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcgPSBwYXJhbXMuZ2V0Q29sdW1uKCksXG5cdFx0XHRmaWVsZDogQ29sdW1uRmllbGQgPSBwYXJhbXMuZ2V0RmllbGQoKSxcblx0XHRcdGRhdGFUeXBlID0gZmllbGQuZ2V0RGF0YVR5cGUoKSxcblx0XHRcdHdpZHRoID0gdGhpcy5jb252ZXJ0V2lkdGgoY29sdW1uQ29uZmlnLndpZHRoKSB8fCB1bmRlZmluZWQ7XG5cblx0XHRsZXQgdmlldzogVmlld0VudGl0eSxcblx0XHRcdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLnZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmlldyA9IG5ldyBWaWV3RW50aXR5KGNvbHVtbkNvbmZpZy52aWV3KTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZW5hYmxlZCA9IGNvbHVtbkNvbmZpZy5lbmFibGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbmFibGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwcmVzZW50YXRpb24gPSB0aGlzLmdldFByZXNlbnRhdGlvbihkYXRhVHlwZSk7XG5cblx0XHRjb25zdCBjb2x1bW5FbnRpdHkgPSBuZXcgQ29sdW1uRW50aXR5KFxuXHRcdFx0bmV3IENvbHVtbklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSxcblx0XHRcdGZpZWxkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHByZXNlbnRhdGlvbixcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdGNvbHVtbkNvbmZpZy5hbGlnbixcblx0XHRcdHZpZXcsXG5cdFx0XHR3aWR0aFxuXHRcdCk7XG5cblx0XHRpZiAoY29sdW1uQ29uZmlnLmhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb2x1bW5FbnRpdHkuc2V0SGVhZGVyKGNvbHVtbkNvbmZpZy5oZWFkZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdHk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRW50aXRpZXMgPSBbXSBhcyBBcnJheTxDb2x1bW5FbnRpdHk+O1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtblBhcmFtcykgPT4ge1xuXHRcdFx0Y29sdW1uRW50aXRpZXMucHVzaCh0aGlzLmNyZWF0ZUNvbHVtbihjb2x1bW4pKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5FbnRpdGllcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFdpZHRoKHdpZHRoOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiArd2lkdGg7XG5cdH1cblxuXHRwcml2YXRlIGdldFByZXNlbnRhdGlvbihkYXRhVHlwZTogRGF0YVR5cGUpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyLmNvbnZlcnQoZGF0YVR5cGUpO1xuXHR9XG59XG4iXX0=