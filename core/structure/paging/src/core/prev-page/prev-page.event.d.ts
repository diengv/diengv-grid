import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class PrevPageEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
