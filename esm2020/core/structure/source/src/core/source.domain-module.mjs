import { SourceSetLoadingCommandHandler } from './loading/source-set-loading.command-handler';
import { SetOriginCommandHandler } from './origin/set/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from './origin/edit/structure.edit-source-item.command-handler';
import { SourceManagerFactory } from '../domain/source.manager-factory';
import { SourceDomainEventPublisher } from './source.domain-event.publisher';
import { DeleteOriginItemCommandHandler } from './origin/delete/delete-origin-item.command-handler';
import { structureKey } from '../../../structure-core/src/api/global/structre.key';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
import { StructureSourceOriginArchive } from './origin/structure.source-origin.archive';
export class SourceDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(StructureSourceOriginArchive);
        container.provide(SourceManagerFactory);
        container.provide(SourceDomainEventPublisher);
    }
    registerCommandHandlers() {
        return [
            SourceSetLoadingCommandHandler,
            SetOriginCommandHandler,
            StructureEditSourceItemCommandHandler,
            DeleteOriginItemCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            StructureOriginChangedEventHandler,
            StructurePreparedItemsEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY29yZS9zb3VyY2UuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHeEYsTUFBTSxPQUFPLGtCQUFrQjtJQUU5QixlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUFvQjtRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU87WUFDTiw4QkFBOEI7WUFDOUIsdUJBQXVCO1lBQ3ZCLHFDQUFxQztZQUNyQyw4QkFBOEI7U0FDOUIsQ0FBQztJQUNILENBQUM7SUFFRCwwQkFBMEI7UUFDekIsT0FBTztZQUNOLGtDQUFrQztZQUNsQyxrQ0FBa0M7U0FDbEMsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBK0I7UUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uLCBBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdCwgQ29tbWFuZCwgQ29udGFpbmVyLCBEb21haW5FdmVudCwgRG9tYWluUHJvdmlkZXJzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU291cmNlU2V0TG9hZGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9sb2FkaW5nL3NvdXJjZS1zZXQtbG9hZGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yaWdpbi9zZXQvc2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2RlbGV0ZS9kZWxldGUtb3JpZ2luLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSB9IGZyb20gJy4vb3JpZ2luL3N0cnVjdHVyZS5zb3VyY2Utb3JpZ2luLmFyY2hpdmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VEb21haW5Nb2R1bGUgaW1wbGVtZW50cyBEb21haW5Qcm92aWRlcnMge1xuXG5cdGRlZmluZUFnZ3JlZ2F0ZSgpOiBBZ2dyZWdhdGVEZWZpbml0aW9uPGFueSwgYW55LCBhbnk+IHwgbnVsbCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZWdpc3RlcktleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBzdHJ1Y3R1cmVLZXk7XG5cdH1cblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFN0cnVjdHVyZVNvdXJjZU9yaWdpbkFyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFNvdXJjZU1hbmFnZXJGYWN0b3J5KTtcblx0XHRjb250YWluZXIucHJvdmlkZShTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cdH1cblxuXHRyZWdpc3RlckNvbW1hbmRIYW5kbGVyczxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNvdXJjZVNldExvYWRpbmdDb21tYW5kSGFuZGxlcixcblx0XHRcdFNldE9yaWdpbkNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlcixcblx0XHRcdERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kSGFuZGxlclxuXHRcdF07XG5cdH1cblxuXHRyZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFN0cnVjdHVyZU9yaWdpbkNoYW5nZWRFdmVudEhhbmRsZXIsXG5cdFx0XHRTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyXG5cdFx0XTtcblx0fVxuXG5cdHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=