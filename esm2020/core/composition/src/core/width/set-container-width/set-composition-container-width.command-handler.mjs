import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
export class SetCompositionContainerWidthCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetCompositionContainerWidthCommand;
    }
    handle(composition, command) {
        const width = command.getWidth();
        composition.setContainerWidth(width);
    }
    publish(aggregate, command) {
        this.publishAggregateEvents(aggregate.getEvents());
    }
    publishAggregateEvents(aggregateEvents) {
        const domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    }
}
SetCompositionContainerWidthCommandHandler.services = [CompositionEventConverter];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLWNvbnRhaW5lci13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9zZXQtY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBS2hHLE1BQU0sT0FBTywwQ0FBMEM7SUFJdEQsWUFBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFGaEUseUJBQW9CLEdBQXlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUcxRyxDQUFDO0lBSUQsVUFBVTtRQUNULE9BQU8sbUNBQW1DLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFpQyxFQUFFLE9BQTRDO1FBRXJGLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUErQixFQUFFLE9BQTRDO1FBQ3BGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUEwQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVPLHNCQUFzQixDQUFDLGVBQXFEO1FBRW5GLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDOztBQXRCZSxtREFBUSxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5ldmVudC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQgfSBmcm9tICcuL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcl07XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShjb21wb3NpdGlvbjogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCB3aWR0aCA9IGNvbW1hbmQuZ2V0V2lkdGgoKTtcblxuXHRcdGNvbXBvc2l0aW9uLnNldENvbnRhaW5lcldpZHRoKHdpZHRoKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlLmdldEV2ZW50cygpIGFzIEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+Pik7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hBZ2dyZWdhdGVFdmVudHMoYWdncmVnYXRlRXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRvbWFpbkV2ZW50cyA9IHRoaXMuY29tcG9zaXRpb25FdmVudENvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZG9tYWluRXZlbnRzKTtcblx0fVxuXG59XG4iXX0=