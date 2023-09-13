import { SetEnabledSelectionCommandHandler } from './set-enabled/set-enabled-selection.command-handler';
import { ToggleSelectedRowCommandHandler } from './toggle/toggle-selected-row.command-handler';
import { FormationManagerFactory } from '../domain/formation.manager-factory';
import { SelectedRowChangedEventHandler } from '../core-read/row-selected/selected-row-changed.event-handler';
import { SetSelectionModeCommandHandler } from './mode/set-selection-mode.command-handler';
import { SelectAllRowsCommandHandler } from './select-all/select-all-rows.command-handler';
import { UnselectAllRowsCommandHandler } from './unselect-all/unselect-all-rows.command-handler';
import { structureKey } from '../../../structure-core/src/api/global/structre.key';
import { SetSelectionTypeCommandHandler } from './type/set-selection-type.command-handler';
import { FormationTypeRepository } from '../core-read/type/formation.type.repository';
import { FormationModeRepository } from '../core-read/mode/formation.mode.repository';
import { FormationEnabledRepository } from '../core-read/enabled/formation.enabled.repository';
import { SetSelectedRowCommandHandler } from './set-selected/set-selected-row.command-handler';
import { SelectRowByIndexCommandHandler } from './select-by-index/select-row-by-index.command-handler';
import { SelectRowByIdCommandHandler } from './select-by-id/select-row-by-id.command-handler';
import { FormationSetMatcherCommandHandler } from './set-matcher/formation.set-matcher.command-handler';
import { FormationCustomRepository } from '../core-read/custom/formation.custom.repository';
import { FormationCustomSelectCommandHandler } from './custom/select/formation.custom-select.command-handler';
import { FormationSetCustomSelectConfigCommandHandler } from './custom/config/formation.set-custom-select-config.command-handler';
export class FormationDomainModule {
    defineAggregate() {
        return null;
    }
    registerKey() {
        return structureKey;
    }
    registerProviders(container) {
        container.provide(FormationManagerFactory);
    }
    registerCommandHandlers() {
        return [
            SetEnabledSelectionCommandHandler,
            SetSelectionModeCommandHandler,
            SetSelectionTypeCommandHandler,
            SelectAllRowsCommandHandler,
            UnselectAllRowsCommandHandler,
            ToggleSelectedRowCommandHandler,
            SetSelectedRowCommandHandler,
            SelectRowByIndexCommandHandler,
            SelectRowByIdCommandHandler,
            FormationSetMatcherCommandHandler,
            FormationCustomSelectCommandHandler,
            FormationSetCustomSelectConfigCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            SelectedRowChangedEventHandler,
            FormationTypeRepository,
            FormationModeRepository,
            FormationEnabledRepository,
            FormationCustomRepository
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvY29yZS9mb3JtYXRpb24uZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbkYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDOUcsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFHbEksTUFBTSxPQUFPLHFCQUFxQjtJQUVqQyxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUFvQjtRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHVCQUF1QjtRQUN0QixPQUFPO1lBQ04saUNBQWlDO1lBQ2pDLDhCQUE4QjtZQUM5Qiw4QkFBOEI7WUFDOUIsMkJBQTJCO1lBQzNCLDZCQUE2QjtZQUM3QiwrQkFBK0I7WUFDL0IsNEJBQTRCO1lBQzVCLDhCQUE4QjtZQUM5QiwyQkFBMkI7WUFDM0IsaUNBQWlDO1lBQ2pDLG1DQUFtQztZQUNuQyw0Q0FBNEM7U0FDNUMsQ0FBQztJQUNILENBQUM7SUFFRCwwQkFBMEI7UUFDekIsT0FBTztZQUNOLDhCQUE4QjtZQUM5Qix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLDBCQUEwQjtZQUMxQix5QkFBeUI7U0FDekIsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBK0I7UUFDOUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uLCBBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdCwgQ29tbWFuZCwgQ29udGFpbmVyLCBEb21haW5FdmVudCwgRG9tYWluUHJvdmlkZXJzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5pbXBvcnQgeyBTZXRFbmFibGVkU2VsZWN0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1lbmFibGVkL3NldC1lbmFibGVkLXNlbGVjdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL2Zvcm1hdGlvbi5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vY29yZS1yZWFkL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNlbGVjdGlvbk1vZGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlbGVjdEFsbFJvd3NDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bnNlbGVjdC1hbGwvdW5zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25UeXBlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3R5cGUvc2V0LXNlbGVjdGlvbi10eXBlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25UeXBlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2NvcmUtcmVhZC90eXBlL2Zvcm1hdGlvbi50eXBlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9jb3JlLXJlYWQvbW9kZS9mb3JtYXRpb24ubW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkVuYWJsZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29yZS1yZWFkL2VuYWJsZWQvZm9ybWF0aW9uLmVuYWJsZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtc2VsZWN0ZWQvc2V0LXNlbGVjdGVkLXJvdy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0Um93QnlJbmRleENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZWxlY3QtYnktaW5kZXgvc2VsZWN0LXJvdy1ieS1pbmRleC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0Um93QnlJZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZWxlY3QtYnktaWQvc2VsZWN0LXJvdy1ieS1pZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0TWF0Y2hlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQtbWF0Y2hlci9mb3JtYXRpb24uc2V0LW1hdGNoZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkN1c3RvbVJlcG9zaXRvcnkgfSBmcm9tICcuLi9jb3JlLXJlYWQvY3VzdG9tL2Zvcm1hdGlvbi5jdXN0b20ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3RDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY3VzdG9tL3NlbGVjdC9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uU2V0Q3VzdG9tU2VsZWN0Q29uZmlnQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2N1c3RvbS9jb25maWcvZm9ybWF0aW9uLnNldC1jdXN0b20tc2VsZWN0LWNvbmZpZy5jb21tYW5kLWhhbmRsZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25Eb21haW5Nb2R1bGUgaW1wbGVtZW50cyBEb21haW5Qcm92aWRlcnMge1xuXG5cdGRlZmluZUFnZ3JlZ2F0ZSgpOiBBZ2dyZWdhdGVEZWZpbml0aW9uPGFueSwgYW55LCBhbnk+IHwgbnVsbCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZWdpc3RlcktleSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBzdHJ1Y3R1cmVLZXk7XG5cdH1cblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5KTtcblx0fVxuXG5cdHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJzPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+PigpOiBBcnJheTxhbnk+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0U2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U2V0U2VsZWN0aW9uTW9kZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U2V0U2VsZWN0aW9uVHlwZUNvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyLFxuXHRcdFx0VW5zZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIsXG5cdFx0XHRUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyLFxuXHRcdFx0U2V0U2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlcixcblx0XHRcdFNlbGVjdFJvd0J5SW5kZXhDb21tYW5kSGFuZGxlcixcblx0XHRcdFNlbGVjdFJvd0J5SWRDb21tYW5kSGFuZGxlcixcblx0XHRcdEZvcm1hdGlvblNldE1hdGNoZXJDb21tYW5kSGFuZGxlcixcblx0XHRcdEZvcm1hdGlvbkN1c3RvbVNlbGVjdENvbW1hbmRIYW5kbGVyLFxuXHRcdFx0Rm9ybWF0aW9uU2V0Q3VzdG9tU2VsZWN0Q29uZmlnQ29tbWFuZEhhbmRsZXJcblx0XHRdO1xuXHR9XG5cblx0cmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTZWxlY3RlZFJvd0NoYW5nZWRFdmVudEhhbmRsZXIsXG5cdFx0XHRGb3JtYXRpb25UeXBlUmVwb3NpdG9yeSxcblx0XHRcdEZvcm1hdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0Rm9ybWF0aW9uRW5hYmxlZFJlcG9zaXRvcnksXG5cdFx0XHRGb3JtYXRpb25DdXN0b21SZXBvc2l0b3J5XG5cdFx0XTtcblx0fVxuXG5cdHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=