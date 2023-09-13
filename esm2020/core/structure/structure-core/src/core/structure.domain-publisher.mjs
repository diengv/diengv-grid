import { CommandDispatcher, CoreContainer } from '@generic-ui/hermes';
import { FilterPublisher } from '../../../filter/src/api/filter.publisher';
import { CreateStructureCommand } from './create/create-structure.command';
import { SetConfigQuickFilterCommand } from '../../../filter/src/core/quick/set-config-quick-filter.command';
import { SetRowHeightCommand } from '../../../vertical-formation/src/core/set-row-height/set-row-height.command';
import { StructureSetHeightCommand } from '../../../vertical-formation/src/core/container/set-height/structure-set-height.command';
import { SetRowHeightBasedOnThemeCommand } from '../../../vertical-formation/src/core/set-row-height-theme/set-row-height-based-on-theme.command';
import { StructurePublisher } from '../api/structure.publisher';
import { StructureCellEditArchive } from '../../../../../feature-view/grid-view/src/edit/structure.cell-edit.archive';
import { CellEditorManager } from '../domain/edit/cell-editor.manager';
import { VerticalFormationPublisher } from '../../../vertical-formation/src/api/vertical-formation.publisher';
import { SourcePublisher } from '../../../source/src/api/source.publisher';
export class StructureDomainPublisher extends StructurePublisher {
    constructor(filterCommandInvoker, sourcePublisher, verticalFormationCommandInvoker, structureCellEditArchive) {
        super();
        this.filterCommandInvoker = filterCommandInvoker;
        this.sourcePublisher = sourcePublisher;
        this.verticalFormationCommandInvoker = verticalFormationCommandInvoker;
        this.structureCellEditArchive = structureCellEditArchive;
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    create(structureId) {
        this.commandDispatcher.dispatch(new CreateStructureCommand(structureId));
    }
    // REMOVE
    enableVirtualScroll(structureId) {
        this.verticalFormationCommandInvoker.enableVirtualScroll(structureId);
    }
    // REMOVE
    disableVirtualScroll(structureId) {
        this.verticalFormationCommandInvoker.disableVirtualScroll(structureId);
    }
    // REMOVE
    scrollToTop(structureId) {
        this.verticalFormationCommandInvoker.scrollToTop(structureId);
    }
    // REMOVE
    scrollToBottom(structureId) {
        this.verticalFormationCommandInvoker.scrollToBottom(structureId);
    }
    // REMOVE
    scrollToIndex(index, structureId) {
        this.verticalFormationCommandInvoker.scrollToIndex(index, structureId);
    }
    // REMOVE
    setScrollPosition(position, structureId) {
        this.verticalFormationCommandInvoker.setScrollPosition(position, structureId);
    }
    setFilterConfig(config, structureId) {
        this.filterCommandInvoker.setConfig(config, structureId);
    }
    setQuickFiltersConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigQuickFilterCommand(structureId, config));
    }
    setRowHeight(rowHeight, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightCommand(structureId, +rowHeight));
    }
    // REMOVE
    setContainerHeight(height, structureId) {
        this.commandDispatcher.dispatch(new StructureSetHeightCommand(structureId, +height));
    }
    // REMOVE
    setRowHeightBasedOnTheme(theme, structureId) {
        this.commandDispatcher.dispatch(new SetRowHeightBasedOnThemeCommand(structureId, theme));
    }
    setCellEdit(cellEdit, structureId) {
        this.structureCellEditArchive.next(structureId, new CellEditorManager(cellEdit));
    }
}
StructureDomainPublisher.services = [
    FilterPublisher,
    SourcePublisher,
    VerticalFormationPublisher,
    StructureCellEditArchive
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRvbWFpbi1wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5kb21haW4tcHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDN0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDakgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0ZBQXdGLENBQUM7QUFDbkksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDbEosT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDdEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFOUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRzNFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxrQkFBa0I7SUFJL0QsWUFBNkIsb0JBQXFDLEVBQzlDLGVBQWdDLEVBQ2hDLCtCQUEyRCxFQUMzRCx3QkFBa0Q7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFKb0IseUJBQW9CLEdB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cGF0Y2hlciwgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci5wdWJsaXNoZXInO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS1zdHJ1Y3R1cmUuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2FwaS9jb25maWcvZmlsdGVyLmNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2FwaS9xdWljay1maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9jb3JlL3F1aWNrL3NldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0Q29tbWFuZCB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvY29yZS9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2NvcmUvY29udGFpbmVyL3NldC1oZWlnaHQvc3RydWN0dXJlLXNldC1oZWlnaHQuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL3NyYy9jb3JlL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvc3JjL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgQ2VsbEVkaXRDb25maWcgfSBmcm9tICcuLi9hcGkvZWRpdC9jZWxsLWVkaXQuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IENlbGxFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvc3JjL2FwaS9zb3VyY2UucHVibGlzaGVyJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRG9tYWluUHVibGlzaGVyIGV4dGVuZHMgU3RydWN0dXJlUHVibGlzaGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShDb21tYW5kRGlzcGF0Y2hlcik7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kSW52b2tlcjogRmlsdGVyUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVB1Ymxpc2hlcjogU291cmNlUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uQ29tbWFuZEludm9rZXI6IFZlcnRpY2FsRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtcblx0XHRGaWx0ZXJQdWJsaXNoZXIsXG5cdFx0U291cmNlUHVibGlzaGVyLFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZVxuXHRdIGFzIGNvbnN0O1xuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVTdHJ1Y3R1cmVDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0ZW5hYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29tbWFuZEludm9rZXIuZW5hYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLmRpc2FibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRzY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdHNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db21tYW5kSW52b2tlci5zY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0c2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9JbmRleChpbmRleCwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25Db21tYW5kSW52b2tlci5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnNldENvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Um93SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK3Jvd0hlaWdodCkpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdHNldENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0SGVpZ2h0Q29tbWFuZChzdHJ1Y3R1cmVJZCwgK2hlaWdodCkpO1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdHNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQoc3RydWN0dXJlSWQsIHRoZW1lKSk7XG5cdH1cblxuXHRzZXRDZWxsRWRpdChjZWxsRWRpdDogQ2VsbEVkaXRDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm5leHQoc3RydWN0dXJlSWQsIG5ldyBDZWxsRWRpdG9yTWFuYWdlcihjZWxsRWRpdCkpO1xuXHR9XG5cbn1cbiJdfQ==