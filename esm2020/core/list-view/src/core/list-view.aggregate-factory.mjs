import { AggregateFactory } from '@generic-ui/hermes';
import { ListViewAggregate } from '../domain/list-view.aggregate';
export class ListViewAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(id) {
        return new ListViewAggregate(id);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2xpc3Qtdmlldy9zcmMvY29yZS9saXN0LXZpZXcuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHbEUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUErQztJQUU1RjtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFjO1FBQ3BCLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnkgZXh0ZW5kcyBBZ2dyZWdhdGVGYWN0b3J5PExpc3RWaWV3SWQsIExpc3RWaWV3QWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShpZDogTGlzdFZpZXdJZCk6IExpc3RWaWV3QWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IExpc3RWaWV3QWdncmVnYXRlKGlkKTtcblx0fVxufVxuIl19