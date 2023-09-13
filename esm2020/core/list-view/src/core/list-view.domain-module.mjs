import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../api/list-view.api-module';
import { SetListViewModeCommandHandler } from './mode/set-list-view-mode.command-handler';
import { ToggleListViewSelectorCommandHandler } from './mode/selector/toggle-list-view-selector.command-handler';
import { ListViewModeSetEventHandler } from '../api/mode/list-view-mode-set.event-handler';
import { ListViewSelectorToggledEventHandler } from '../api/mode/selector/list-view-selector-toggled.event-handler';
import { CreateListViewCommandHandler } from './create/create-list-view.command-handler';
import { ListViewAggregateFactory } from './list-view.aggregate-factory';
import { InMemoryListViewAggregateRepository } from '../persist/in-memory.list-view.aggregate-repository';
export class ListViewDomainModule {
    defineAggregate() {
        return {
            aggregateKey: listViewKey,
            createCommandHandler: CreateListViewCommandHandler,
            factory: ListViewAggregateFactory,
            repository: InMemoryListViewAggregateRepository
        };
    }
    registerKey() {
        return listViewKey;
    }
    registerProviders(container) {
        container.provide(ListViewDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetListViewModeCommandHandler,
            ToggleListViewSelectorCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            ListViewModeSetEventHandler,
            ListViewSelectorToggledEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L3NyYy9jb3JlL2xpc3Qtdmlldy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNwSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUcxRyxNQUFNLE9BQU8sb0JBQW9CO0lBRWhDLGVBQWU7UUFDZCxPQUFPO1lBQ04sWUFBWSxFQUFFLFdBQVc7WUFDekIsb0JBQW9CLEVBQUUsNEJBQTRCO1lBQ2xELE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsVUFBVSxFQUFFLG1DQUFtQztTQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBb0I7UUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTztZQUNOLDZCQUE2QjtZQUM3QixvQ0FBb0M7U0FDcEMsQ0FBQztJQUNILENBQUM7SUFFRCwwQkFBMEI7UUFDekIsT0FBTztZQUNOLDJCQUEyQjtZQUMzQixtQ0FBbUM7U0FDbkMsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBK0I7UUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uLCBBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdCwgQ29tbWFuZCwgQ29udGFpbmVyLCBEb21haW5FdmVudCwgRG9tYWluUHJvdmlkZXJzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdEaXNwYXRjaGVyIH0gZnJvbSAnLi9saXN0LXZpZXcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBsaXN0Vmlld0tleSB9IGZyb20gJy4uL2FwaS9saXN0LXZpZXcuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci90b2dnbGUtbGlzdC12aWV3LXNlbGVjdG9yLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2FwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS1saXN0LXZpZXcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcGVyc2lzdC9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEb21haW5Nb2R1bGUgaW1wbGVtZW50cyBEb21haW5Qcm92aWRlcnMge1xuXG5cdGRlZmluZUFnZ3JlZ2F0ZSgpOiBBZ2dyZWdhdGVEZWZpbml0aW9uPGFueSwgYW55LCBhbnk+IHwgbnVsbCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFnZ3JlZ2F0ZUtleTogbGlzdFZpZXdLZXksXG5cdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlcixcblx0XHRcdGZhY3Rvcnk6IExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdHJlcG9zaXRvcnk6IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdFx0fTtcblx0fVxuXG5cdHJlZ2lzdGVyS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGxpc3RWaWV3S2V5O1xuXHR9XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblx0XHRjb250YWluZXIucHJvdmlkZShMaXN0Vmlld0Rpc3BhdGNoZXIpO1xuXHR9XG5cblx0cmVnaXN0ZXJDb21tYW5kSGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlcixcblx0XHRcdFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlclxuXHRcdF07XG5cdH1cblxuXHRyZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlcixcblx0XHRcdExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyXG5cdFx0XTtcblx0fVxuXG5cdHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG5cbiJdfQ==