import { SchemaDispatcher } from './schema.dispatcher';
import { StructurePublisher } from '../../../structure/structure-core/src/api/structure.publisher';
import { FabricModalThemeService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../api/global/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { StructureId } from '../../../structure/structure-core/src/api/global/structure.id';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaPublisher } from '../api/schema.publisher';
import { SchemaRowClass } from '../api/styling/schema.row-class';
import { SchemaRowStyle } from '../api/styling/schema.row-style';
import { SchemaRowClassArchive } from './styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from './styling/schema.row-style.archive';
export declare class SchemaDomainPublisher extends SchemaPublisher {
    private readonly schemaDispatcher;
    private readonly structurePublisher;
    private readonly fabricModalThemeService;
    private readonly schemaRowClassArchive;
    private readonly schemaRowStyleArchive;
    constructor(schemaDispatcher: SchemaDispatcher, structurePublisher: StructurePublisher, fabricModalThemeService: FabricModalThemeService, schemaRowClassArchive: SchemaRowClassArchive, schemaRowStyleArchive: SchemaRowStyleArchive);
    static readonly services: readonly [typeof SchemaDispatcher, typeof StructurePublisher, typeof FabricModalThemeService, typeof SchemaRowClassArchive, typeof SchemaRowStyleArchive];
    create(schemaId: SchemaReadModelRootId): void;
    setTheme(theme: SchemaTheme, schemaId: SchemaReadModelRootId, structureId: StructureId): void;
    setRowColoring(rowColoring: RowColoring, schemaId: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    setRowClass(schemaRowClass: SchemaRowClass, schemaId: SchemaReadModelRootId): void;
    setRowStyle(rowStyle: SchemaRowStyle, schemaId: SchemaReadModelRootId): void;
    private toSchemaRowColoring;
    private toFabricTheme;
}
