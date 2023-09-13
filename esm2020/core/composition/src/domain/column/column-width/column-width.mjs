import { ColumnWidthType } from './column-width-type';
export class ColumnWidth {
    constructor(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    getWidth() {
        return this.width;
    }
    getColumnType() {
        return this.template;
    }
    isTypePercentage() {
        return this.template === ColumnWidthType.PERCENTAGE;
    }
    isTypeAuto() {
        return this.template === ColumnWidthType.AUTO;
    }
    isTypeNumber() {
        return this.template === ColumnWidthType.NUMBER;
    }
    setWidth(width) {
        this.width = width;
    }
    setWidthAndType(width) {
        if (width === undefined || width === null || width === 'auto') {
            this.template = ColumnWidthType.AUTO;
            this.setWidth(null);
        }
        else if (this.isPercentage(width)) {
            this.template = ColumnWidthType.PERCENTAGE;
            this.setWidth(this.percentageToNumber('' + width));
        }
        else if (this.isStringNumber(width)) {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
        else {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
    }
    clone() {
        return new ColumnWidth(this.baseWidth);
    }
    isPercentage(width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    }
    /**
     * Width needs to be in format '89%'
     * @param width
     */
    percentageToNumber(width) {
        return +(width.slice(0, -1));
    }
    isStringNumber(width) {
        const widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2NvbHVtbi13aWR0aC9jb2x1bW4td2lkdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sT0FBTyxXQUFXO0lBUXZCLFlBQVksS0FBdUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvQyxDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQXNCO1FBRXJDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFFOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBRW5EO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDRixDQUFDO0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBc0I7UUFDMUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7SUFDSyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3ZDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQXNCO1FBQzVDLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRTdCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aFR5cGUgfSBmcm9tICcuL2NvbHVtbi13aWR0aC10eXBlJztcblxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoIHtcblxuXHRwcml2YXRlIHRlbXBsYXRlOiBDb2x1bW5XaWR0aFR5cGU7XG5cblx0cHJpdmF0ZSBiYXNlV2lkdGg6IG51bWJlciB8IHN0cmluZztcblxuXHRwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Iod2lkdGg/OiBudW1iZXIgfCBzdHJpbmcpIHtcblx0XHR0aGlzLmJhc2VXaWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuc2V0V2lkdGhBbmRUeXBlKHdpZHRoKTtcblx0fVxuXG5cdGdldFdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuXHRnZXRDb2x1bW5UeXBlKCk6IENvbHVtbldpZHRoVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGU7XG5cdH1cblxuXHRpc1R5cGVQZXJjZW50YWdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRTtcblx0fVxuXG5cdGlzVHlwZUF1dG8oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5BVVRPO1xuXHR9XG5cblx0aXNUeXBlTnVtYmVyKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlID09PSBDb2x1bW5XaWR0aFR5cGUuTlVNQkVSO1xuXHR9XG5cblx0c2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0fVxuXG5cdHNldFdpZHRoQW5kVHlwZSh3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAod2lkdGggPT09IHVuZGVmaW5lZCB8fCB3aWR0aCA9PT0gbnVsbCB8fCB3aWR0aCA9PT0gJ2F1dG8nKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuQVVUTztcblx0XHRcdHRoaXMuc2V0V2lkdGgobnVsbCk7XG5cblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNQZXJjZW50YWdlKHdpZHRoKSkge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0U7XG5cdFx0XHR0aGlzLnNldFdpZHRoKHRoaXMucGVyY2VudGFnZVRvTnVtYmVyKCcnICsgd2lkdGgpKTtcblxuXHRcdH0gZWxzZSBpZiAodGhpcy5pc1N0cmluZ051bWJlcih3aWR0aCkpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdFx0XHR0aGlzLnNldFdpZHRoKCt3aWR0aCk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdFx0XHR0aGlzLnNldFdpZHRoKCt3aWR0aCk7XG5cdFx0fVxuXHR9XG5cblx0Y2xvbmUoKTogQ29sdW1uV2lkdGgge1xuXHRcdHJldHVybiBuZXcgQ29sdW1uV2lkdGgodGhpcy5iYXNlV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1BlcmNlbnRhZ2Uod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnICYmIHdpZHRoW3dpZHRoLmxlbmd0aCAtIDFdID09PSAnJSc7XG5cdH1cblxuXHQvKipcblx0ICogV2lkdGggbmVlZHMgdG8gYmUgaW4gZm9ybWF0ICc4OSUnXG5cdCAqIEBwYXJhbSB3aWR0aFxuXHQgKi9cblx0cHJpdmF0ZSBwZXJjZW50YWdlVG9OdW1iZXIod2lkdGg6IHN0cmluZyk6IG51bWJlciB7XG5cdFx0cmV0dXJuICsod2lkdGguc2xpY2UoMCwgLTEpKTtcblx0fVxuXG5cdHByaXZhdGUgaXNTdHJpbmdOdW1iZXIod2lkdGg6IG51bWJlciB8IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IHdpZHRoQXNOdW1iZXIgPSArd2lkdGg7XG5cblx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOKHdpZHRoQXNOdW1iZXIpO1xuXHR9XG59XG4iXX0=