import { FieldEntity } from './field.entity';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldEntityIdGenerator } from './field-entity-id.generator';
export class FieldEntityFactory {
    constructor(fieldIdGenerator, dataFieldFactory) {
        this.fieldIdGenerator = fieldIdGenerator;
        this.dataFieldFactory = dataFieldFactory;
    }
    create(configs) {
        if (!configs) {
            return [];
        }
        return configs.map((fieldConfig, index) => {
            const fieldId = this.fieldIdGenerator.generateId(), dataField = this.dataFieldFactory.create(fieldConfig);
            return new FieldEntity(fieldId, dataField, this.getFieldName(fieldConfig, index));
        });
    }
    getFieldName(fieldConfig, index) {
        if (typeof fieldConfig.field === 'string') {
            return fieldConfig.field.toLowerCase();
        }
        else {
            return 'Field #' + index;
        }
    }
}
FieldEntityFactory.services = [
    FieldEntityIdGenerator,
    DataFieldFactory
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZW50aXR5LWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFLE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsWUFBNkIsZ0JBQXdDLEVBQ2pELGdCQUFrQztRQUR6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO1FBQ2pELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQztJQU9ELE1BQU0sQ0FBQyxPQUEyQjtRQUVqQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFFOUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUNqRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV2RCxPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsV0FBd0IsRUFBRSxLQUFhO1FBRTNELElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNGLENBQUM7O0FBM0JlLDJCQUFRLEdBQUc7SUFDMUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvY29uZmlnL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZEVudGl0eSB9IGZyb20gJy4vZmllbGQuZW50aXR5JztcbmltcG9ydCB7IERhdGFGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEvZGF0YS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkRW50aXR5SWRHZW5lcmF0b3IgfSBmcm9tICcuL2ZpZWxkLWVudGl0eS1pZC5nZW5lcmF0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZEVudGl0eUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZEdlbmVyYXRvcjogRmllbGRFbnRpdHlJZEdlbmVyYXRvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRhRmllbGRGYWN0b3J5OiBEYXRhRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbXG5cdFx0RmllbGRFbnRpdHlJZEdlbmVyYXRvcixcblx0XHREYXRhRmllbGRGYWN0b3J5XG5cdF07XG5cblx0Y3JlYXRlKGNvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IEFycmF5PEZpZWxkRW50aXR5PiB7XG5cblx0XHRpZiAoIWNvbmZpZ3MpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uZmlncy5tYXAoKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSxcblx0XHRcdFx0ZGF0YUZpZWxkID0gdGhpcy5kYXRhRmllbGRGYWN0b3J5LmNyZWF0ZShmaWVsZENvbmZpZyk7XG5cblx0XHRcdHJldHVybiBuZXcgRmllbGRFbnRpdHkoZmllbGRJZCwgZGF0YUZpZWxkLCB0aGlzLmdldEZpZWxkTmFtZShmaWVsZENvbmZpZywgaW5kZXgpKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRpZiAodHlwZW9mIGZpZWxkQ29uZmlnLmZpZWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIGZpZWxkQ29uZmlnLmZpZWxkLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnRmllbGQgIycgKyBpbmRleDtcblx0XHR9XG5cdH1cblxufVxuIl19