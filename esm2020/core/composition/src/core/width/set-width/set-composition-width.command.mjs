import { CompositionCommand } from '../../composition.command';
export class SetCompositionWidthCommand extends CompositionCommand {
    constructor(structureId, width) {
        super(structureId, 'SetCompositionWidthCommand');
        this.structureId = structureId;
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvd2lkdGgvc2V0LXdpZHRoL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxrQkFBa0I7SUFFakUsWUFBNkIsV0FBd0IsRUFDakMsS0FBYTtRQUNoQyxLQUFLLENBQUMsV0FBVyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFGckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUVqQyxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG59XG4iXX0=