import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { ConfigFilterSetEvent } from './config-filter-set.event';
export class SetConfigFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetConfigFilterCommand;
    }
    handle(aggregate, command) {
        const filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    }
    publish(aggregate, command) {
        const filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvY29uZmlnL3NldC1jb25maWctZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStCLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSWpFLE1BQU0sT0FBTyw2QkFBNkI7SUFBMUM7UUFFa0IseUJBQW9CLEdBQXlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQW9CM0csQ0FBQztJQWxCQSxVQUFVO1FBQ1QsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQTZCLEVBQUUsT0FBK0I7UUFFcEUsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE2QixFQUFFLE9BQStCO1FBRXJFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgQ29yZUNvbnRhaW5lciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4vY29uZmlnLWZpbHRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldENvbmZpZ0ZpbHRlckNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb25maWdGaWx0ZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldENvbmZpZ0ZpbHRlckNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlckNvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0RmlsdGVyQ29uZmlnKGZpbHRlckNvbmZpZyk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb25maWdGaWx0ZXJTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksIGZpbHRlckNvbmZpZy5lbmFibGVkKSk7XG5cdH1cblxufVxuIl19