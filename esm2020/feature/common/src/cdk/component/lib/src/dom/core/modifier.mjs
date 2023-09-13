export class Modifier {
    constructor(hostElement) {
        this.hostElement = hostElement;
    }
    getElement(htmlElement) {
        return this.createModifier(htmlElement);
    }
    getHost() {
        if (!this.hostElement) {
            throw new Error('Missing host element in DomRenderer constructor.');
        }
        return this.createModifier(this.hostElement);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZG9tL2NvcmUvbW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFnQixRQUFRO0lBRTdCLFlBQ2tCLFdBQXlCO1FBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO0lBRTNDLENBQUM7SUFJRCxVQUFVLENBQUMsV0FBd0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RpZmllckFwaSB9IGZyb20gJy4vbW9kaWZpZXItYXBpJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1vZGlmaWVyPFQgZXh0ZW5kcyBNb2RpZmllckFwaT4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGhvc3RFbGVtZW50PzogSFRNTEVsZW1lbnRcblx0KSB7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogVDtcblxuXHRnZXRFbGVtZW50KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZU1vZGlmaWVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG5cdGdldEhvc3QoKTogVCB7XG5cblx0XHRpZiAoIXRoaXMuaG9zdEVsZW1lbnQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyBob3N0IGVsZW1lbnQgaW4gRG9tUmVuZGVyZXIgY29uc3RydWN0b3IuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlTW9kaWZpZXIodGhpcy5ob3N0RWxlbWVudCk7XG5cdH1cbn1cbiJdfQ==