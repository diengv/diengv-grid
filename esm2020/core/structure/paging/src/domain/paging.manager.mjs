import { PageChangedAggregateEvent } from '../core/page/page-changed.aggregate-event';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { PagesizeChangedAggregateEvent } from '../core/pagesize/pagesize-changed.aggregate-event';
export class PagingManager {
    constructor(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, sourceSize, logger) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.sourceSize = sourceSize;
        // TODO
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    static default(logger) {
        return new PagingManager(false, 1, 25, [10, 25, 50, 100], false, true, 0, logger);
    }
    // TODO Remove
    static fromConfig(paging, logger) {
        const defaultPagingDefinition = PagingManager.default(logger), enabled = paging.enabled || defaultPagingDefinition.isEnabled(), page = paging.page || defaultPagingDefinition.getPage(), pageSize = paging.pageSize || defaultPagingDefinition.getPageSize(), pageSizes = paging.pageSizes || defaultPagingDefinition.getPageSizes(), pagerTop = paging.pagerTop || defaultPagingDefinition.isPagerTop(), pagerBottom = paging.pagerBottom || defaultPagingDefinition.isPagerBottom();
        return new PagingManager(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, 0, logger);
    }
    isEnabled() {
        return this.enabled;
    }
    isDisabled() {
        return !this.enabled;
    }
    getPage() {
        return this.page;
    }
    getPageSize() {
        return this.pageSize;
    }
    getPageSizes() {
        return this.pageSizes;
    }
    isPagerTop() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerTop;
    }
    isPagerBottom() {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerBottom;
    }
    getSourceSize() {
        return this.sourceSize;
    }
    change(pagingConfig) {
        if (pagingConfig.enabled !== undefined) {
            this.enabled = pagingConfig.enabled;
        }
        if (pagingConfig.page !== undefined) {
            this.page = pagingConfig.page;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSize !== undefined) {
            this.pageSize = pagingConfig.pageSize;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSizes !== undefined) {
            this.pageSizes = pagingConfig.pageSizes;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerTop !== undefined) {
            this.pagerTop = pagingConfig.pagerTop;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerBottom !== undefined) {
            this.pagerBottom = pagingConfig.pagerBottom;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (this.enabled === true &&
            pagingConfig.pagerTop === false &&
            pagingConfig.pagerBottom === false) {
            this.pagerBottom = true;
            this.logger.warn('Pagers cannot be turn off when paging is enabled.');
        }
    }
    setSourceSize(size) {
        this.sourceSize = size;
    }
    nextPage() {
        let nextPage = this.page;
        if (!this.isNextPageDisabled()) {
            nextPage += 1;
        }
        this.page = nextPage;
    }
    prevPage() {
        let prevPage = this.page;
        if (!this.isPrevPageDisabled()) {
            prevPage -= 1;
        }
        this.page = prevPage;
    }
    changePageSize(pageSize) {
        if (this.pageSizes.find((ps) => ps === pageSize)) {
            this.setPage(1);
            this.setPageSize(pageSize);
        }
        return this.events;
    }
    isNextPageDisabled() {
        if (this.sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(this.sourceSize / this.pageSize);
    }
    isPrevPageDisabled() {
        return this.page === 1;
    }
    calculateStart() {
        const firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (this.sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    }
    calculateEnd() {
        const lastItem = this.page * this.pageSize;
        if (this.sourceSize < lastItem) {
            return this.sourceSize;
        }
        return lastItem;
    }
    sample(source) {
        if (this.isDisabled()) {
            return source;
        }
        let start = this.calculateStart();
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd());
    }
    clearEvents() {
        this.events.length = 0;
    }
    setPage(page) {
        this.page = page;
        this.events.push(new PageChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
    setPageSize(pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvZG9tYWluL3BhZ2luZy5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUdsRyxNQUFNLE9BQU8sYUFBYTtJQU96QixZQUE0QixPQUFnQixFQUMvQixJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsU0FBd0IsRUFDeEIsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsVUFBa0IsRUFDMUIsTUFBYztRQVBTLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDL0IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFYL0IsT0FBTztRQUNVLFdBQU0sR0FBdUMsRUFBRSxDQUFDO1FBWWhFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxjQUFjO0lBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFjO1FBQzVCLE9BQU8sSUFBSSxhQUFhLENBQ3ZCLEtBQUssRUFDTCxDQUFDLEVBQ0QsRUFBRSxFQUNGLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ2pCLEtBQUssRUFDTCxJQUFJLEVBQ0osQ0FBQyxFQUNELE1BQU0sQ0FD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SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFrQjtRQUV4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNkO1FBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRWxDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxPQUFPLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUF5QixDQUFDLElBQUksV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTyxXQUFXLENBQUMsUUFBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSw2QkFBNkIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbmZpZ1dpdGhJZCB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZy13aXRoLWlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9jb25maWcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9wYWdlL3BhZ2UtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL3BhZ2VzaXplL3BhZ2VzaXplLWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgUGFnaW5nTWFuYWdlciB7XG5cblx0Ly8gVE9ET1xuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8U3RydWN0dXJlSWQ+PiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHBhZ2U6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZVNpemVzOiBBcnJheTxudW1iZXI+LFxuXHRcdFx0XHRcdFx0cHJpdmF0ZSBwYWdlclRvcDogYm9vbGVhbixcblx0XHRcdFx0XHRcdHByaXZhdGUgcGFnZXJCb3R0b206IGJvb2xlYW4sXG5cdFx0XHRcdFx0XHRwcml2YXRlIHNvdXJjZVNpemU6IG51bWJlcixcblx0XHRcdFx0XHRcdGxvZ2dlcjogTG9nZ2VyKSB7XG5cdFx0dGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZVxuXHRzdGF0aWMgZGVmYXVsdChsb2dnZXI6IExvZ2dlcikge1xuXHRcdHJldHVybiBuZXcgUGFnaW5nTWFuYWdlcihcblx0XHRcdGZhbHNlLFxuXHRcdFx0MSxcblx0XHRcdDI1LFxuXHRcdFx0WzEwLCAyNSwgNTAsIDEwMF0sXG5cdFx0XHRmYWxzZSxcblx0XHRcdHRydWUsXG5cdFx0XHQwLFxuXHRcdFx0bG9nZ2VyXG5cdFx0KTtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlXG5cdHN0YXRpYyBmcm9tQ29uZmlnKHBhZ2luZzogUGFnaW5nQ29uZmlnV2l0aElkLCBsb2dnZXI6IExvZ2dlcik6IFBhZ2luZ01hbmFnZXIge1xuXG5cdFx0Y29uc3QgZGVmYXVsdFBhZ2luZ0RlZmluaXRpb24gPSBQYWdpbmdNYW5hZ2VyLmRlZmF1bHQobG9nZ2VyKSxcblx0XHRcdGVuYWJsZWQgPSBwYWdpbmcuZW5hYmxlZCB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHBhZ2UgPSBwYWdpbmcucGFnZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlKCksXG5cdFx0XHRwYWdlU2l6ZSA9IHBhZ2luZy5wYWdlU2l6ZSB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZSgpLFxuXHRcdFx0cGFnZVNpemVzID0gcGFnaW5nLnBhZ2VTaXplcyB8fCBkZWZhdWx0UGFnaW5nRGVmaW5pdGlvbi5nZXRQYWdlU2l6ZXMoKSxcblx0XHRcdHBhZ2VyVG9wID0gcGFnaW5nLnBhZ2VyVG9wIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJUb3AoKSxcblx0XHRcdHBhZ2VyQm90dG9tID0gcGFnaW5nLnBhZ2VyQm90dG9tIHx8IGRlZmF1bHRQYWdpbmdEZWZpbml0aW9uLmlzUGFnZXJCb3R0b20oKTtcblxuXHRcdHJldHVybiBuZXcgUGFnaW5nTWFuYWdlcihcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHRwYWdlLFxuXHRcdFx0cGFnZVNpemUsXG5cdFx0XHRwYWdlU2l6ZXMsXG5cdFx0XHRwYWdlclRvcCxcblx0XHRcdHBhZ2VyQm90dG9tLFxuXHRcdFx0MCxcblx0XHRcdGxvZ2dlclxuXHRcdCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRQYWdlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZTtcblx0fVxuXG5cdGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemU7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNpemVzO1xuXHR9XG5cblx0aXNQYWdlclRvcCgpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wYWdlclRvcDtcblx0fVxuXG5cdGlzUGFnZXJCb3R0b20oKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZXJCb3R0b207XG5cdH1cblxuXHRnZXRTb3VyY2VTaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0fVxuXG5cdGNoYW5nZShwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHBhZ2luZ0NvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnBhZ2UgPSBwYWdpbmdDb25maWcucGFnZTtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZVNpemUgPSBwYWdpbmdDb25maWcucGFnZVNpemU7XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHBhZ2luZ0NvbmZpZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlU2l6ZXMgPSBwYWdpbmdDb25maWcucGFnZVNpemVzO1xuXG5cdFx0XHRpZiAocGFnaW5nQ29uZmlnLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwYWdpbmdDb25maWcucGFnZXJUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5wYWdlclRvcCA9IHBhZ2luZ0NvbmZpZy5wYWdlclRvcDtcblxuXHRcdFx0aWYgKHBhZ2luZ0NvbmZpZy5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMucGFnZXJCb3R0b20gPSBwYWdpbmdDb25maWcucGFnZXJCb3R0b207XG5cblx0XHRcdGlmIChwYWdpbmdDb25maWcuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW5hYmxlZCA9PT0gdHJ1ZSAmJlxuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyVG9wID09PSBmYWxzZSAmJlxuXHRcdFx0cGFnaW5nQ29uZmlnLnBhZ2VyQm90dG9tID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5wYWdlckJvdHRvbSA9IHRydWU7XG5cblx0XHRcdHRoaXMubG9nZ2VyLndhcm4oJ1BhZ2VycyBjYW5ub3QgYmUgdHVybiBvZmYgd2hlbiBwYWdpbmcgaXMgZW5hYmxlZC4nKTtcblx0XHR9XG5cblx0fVxuXG5cdHNldFNvdXJjZVNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VTaXplID0gc2l6ZTtcblx0fVxuXG5cdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBuZXh0UGFnZSA9IHRoaXMucGFnZTtcblxuXHRcdGlmICghdGhpcy5pc05leHRQYWdlRGlzYWJsZWQoKSkge1xuXHRcdFx0bmV4dFBhZ2UgKz0gMTtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSBuZXh0UGFnZTtcblx0fVxuXG5cdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdGxldCBwcmV2UGFnZSA9IHRoaXMucGFnZTtcblxuXHRcdGlmICghdGhpcy5pc1ByZXZQYWdlRGlzYWJsZWQoKSkge1xuXHRcdFx0cHJldlBhZ2UgLT0gMTtcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSBwcmV2UGFnZTtcblx0fVxuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPj4ge1xuXG5cdFx0aWYgKHRoaXMucGFnZVNpemVzLmZpbmQoKHBzOiBudW1iZXIpID0+IHBzID09PSBwYWdlU2l6ZSkpIHtcblxuXHRcdFx0dGhpcy5zZXRQYWdlKDEpO1xuXHRcdFx0dGhpcy5zZXRQYWdlU2l6ZShwYWdlU2l6ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzO1xuXHR9XG5cblx0aXNOZXh0UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKHRoaXMuc291cmNlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucGFnZSA9PT0gTWF0aC5jZWlsKHRoaXMuc291cmNlU2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuXHR9XG5cblx0aXNQcmV2UGFnZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG5cdH1cblxuXHRjYWxjdWxhdGVTdGFydCgpOiBudW1iZXIge1xuXG5cdFx0Y29uc3QgZmlyc3RJdGVtID0gMSArICgodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBmaXJzdEl0ZW0pIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaXJzdEl0ZW07XG5cdH1cblxuXHRjYWxjdWxhdGVFbmQoKTogbnVtYmVyIHtcblxuXHRcdGNvbnN0IGxhc3RJdGVtID0gdGhpcy5wYWdlICogdGhpcy5wYWdlU2l6ZTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZVNpemUgPCBsYXN0SXRlbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGFzdEl0ZW07XG5cdH1cblxuXHRzYW1wbGUoc291cmNlOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cblx0XHRpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcblx0XHRcdHJldHVybiBzb3VyY2U7XG5cdFx0fVxuXG5cdFx0bGV0IHN0YXJ0ID0gdGhpcy5jYWxjdWxhdGVTdGFydCgpO1xuXG5cdFx0aWYgKHN0YXJ0ICE9PSAwKSB7XG5cdFx0XHRzdGFydCAtPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHRoaXMuY2FsY3VsYXRlRW5kKCkpO1xuXHR9XG5cblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHMubGVuZ3RoID0gMDtcblx0fVxuXG5cdHByaXZhdGUgc2V0UGFnZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xuXHRcdHRoaXMuZXZlbnRzLnB1c2gobmV3IFBhZ2VDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG5cdFx0dGhpcy5ldmVudHMucHVzaChuZXcgUGFnZXNpemVDaGFuZ2VkQWdncmVnYXRlRXZlbnQobmV3IFN0cnVjdHVyZUlkKCdUT0RPIG5lZWQgdG8gYmUgY2hhbmdlZCcpKSk7XG5cdH1cblxufVxuIl19