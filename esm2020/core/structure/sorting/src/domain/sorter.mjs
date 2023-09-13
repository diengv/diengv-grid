export class Sorter {
    constructor(id, field, direction = true) {
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    getId() {
        return this.sorterId;
    }
    getRank() {
        return this.rank;
    }
    getField() {
        return this.field;
    }
    hasDirection() {
        return this.direction;
    }
    changeDirection() {
        this.direction = !this.direction;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    sort(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((entityOne, entityTwo) => {
            return this.field.sort(entityOne, entityTwo, this.direction);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9kb21haW4vc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sT0FBTyxNQUFNO0lBWWxCLFlBQVksRUFBWSxFQUNyQixLQUFrQixFQUNsQixZQUFxQixJQUFJO1FBTnBCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFPeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBMkI7UUFFL0IsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQXFCLEVBQUUsU0FBcUIsRUFBRSxFQUFFO1lBQ3JFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4uL2FwaS9pZC9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRmllbGRFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTb3J0ZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGVySWQ6IFNvcnRlcklkO1xuXG5cdHByaXZhdGUgY29sdW1uSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIGZpZWxkOiBGaWVsZEVudGl0eTtcblxuXHRwcml2YXRlIHJhbms6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBkaXJlY3Rpb246IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaWQ6IFNvcnRlcklkLFxuXHRcdFx0XHRmaWVsZDogRmllbGRFbnRpdHksXG5cdFx0XHRcdGRpcmVjdGlvbjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHR0aGlzLnNvcnRlcklkID0gaWQ7XG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0Z2V0SWQoKTogU29ydGVySWQge1xuXHRcdHJldHVybiB0aGlzLnNvcnRlcklkO1xuXHR9XG5cblx0Z2V0UmFuaygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhbms7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBGaWVsZEVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGQ7XG5cdH1cblxuXHRoYXNEaXJlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuXHR9XG5cblx0Y2hhbmdlRGlyZWN0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gIXRoaXMuZGlyZWN0aW9uO1xuXHR9XG5cblx0c2V0RGlyZWN0aW9uKGRpcmVjdGlvbjogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHR9XG5cblx0c29ydChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pOiBBcnJheTxJdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLnNvcnQoKGVudGl0eU9uZTogSXRlbUVudGl0eSwgZW50aXR5VHdvOiBJdGVtRW50aXR5KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5zb3J0KGVudGl0eU9uZSwgZW50aXR5VHdvLCB0aGlzLmRpcmVjdGlvbik7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19