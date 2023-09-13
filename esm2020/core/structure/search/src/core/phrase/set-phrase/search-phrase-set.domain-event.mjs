import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    constructor(aggregateId, phrase, initial) {
        super(aggregateId, { phrase, initial }, 'SearchPhraseSetDomainEvent');
        this.phrase = phrase;
        this.initial = initial;
    }
    getPhrase() {
        return this.phrase;
    }
    isInitial() {
        return this.initial;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2NvcmUvcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXJHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFFbkUsWUFBWSxXQUF3QixFQUNoQixNQUFjLEVBQ2QsT0FBZ0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRm5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGhyYXNlOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbDogYm9vbGVhbikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCB7IHBocmFzZSwgaW5pdGlhbCB9LCAnU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQnKTtcblx0fVxuXG5cdGdldFBocmFzZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBocmFzZTtcblx0fVxuXG5cdGlzSW5pdGlhbCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsO1xuXHR9XG5cbn1cbiJdfQ==