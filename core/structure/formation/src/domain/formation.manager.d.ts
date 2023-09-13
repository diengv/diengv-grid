import { RowSelectToggleType } from './row-select-toggle-type';
import { RowSelectionMode, RowSelectionType } from '../api/row-selected/row-selection';
import { StructureAggregateEvent } from '../../../structure-core/src/core/structure.aggregate-event';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { ItemEntityId } from '../../../source/src/domain/item/item.entity-id';
import { ItemEntity } from '../../../source/src/domain/item/item.entity';
import { FormationCustomSelectId } from '../api/custom/formation.custom-select.id';
import { FormationCustomSelectionConfig } from '../api/custom/formation.custom-selection.config';
export declare class FormationManager {
    private id;
    private selectedItemIds;
    private enabled;
    private selection;
    private allSelected;
    private allUnselected;
    private customSelection;
    private matcher;
    constructor(id: StructureId, selectedItemIds: Set<string>);
    init(enabled: boolean, mode: RowSelectionMode, type: RowSelectionType): Array<StructureAggregateEvent>;
    setSelection(enabled: boolean): Array<StructureAggregateEvent>;
    setMode(mode: RowSelectionMode): Array<StructureAggregateEvent>;
    setType(type: RowSelectionType): Array<StructureAggregateEvent>;
    setMatcher(matcher: (item: any) => any): void;
    setCustomConfig(config: FormationCustomSelectionConfig): Array<StructureAggregateEvent>;
    isAllSelected(): boolean;
    isAllUnselected(): boolean;
    getSelectedItemIds(): Array<ItemEntityId>;
    selectCustom(id: FormationCustomSelectId, itemEntities: Array<ItemEntity>): void;
    selectAll(allEntityIds: Array<ItemEntityId>): void;
    unselectAll(): void;
    invertSelected(allEntityIds: Array<ItemEntityId>): void;
    reSelectByIds(itemEntities: Array<ItemEntity>): void;
    selectByIds(ids: Array<string>, itemEntities: Array<ItemEntity>): void;
    selectByIndex(indexes: Array<number>, allEntityIds: Array<ItemEntityId>): void;
    selectRows(itemIds: Array<string>, itemEntityIds: Array<ItemEntityId>): void;
    toggleRow(itemId: string, type: RowSelectToggleType, itemEntityIds: Array<ItemEntityId>): void;
    calculateAllSelected(itemEntityIds: Array<ItemEntityId>): void;
    calculateAllUnselected(): void;
    unselectRow(itemEntityId: ItemEntityId): void;
    getId(): StructureId;
    getType(): RowSelectionType;
    private toggleRowByType;
}