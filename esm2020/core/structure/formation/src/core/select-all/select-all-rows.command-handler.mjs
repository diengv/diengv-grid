import { SelectAllRowsCommand } from './select-all-rows.command';
export class SelectAllRowsCommandHandler {
    forCommand() {
        return SelectAllRowsCommand;
    }
    handle(aggregate, command) {
        aggregate.selectAll();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9jb3JlL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRSxNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLFVBQVU7UUFDVCxPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUE2QjtRQUNsRSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNlbGVjdEFsbFJvd3NDb21tYW5kIH0gZnJvbSAnLi9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNlbGVjdEFsbFJvd3NDb21tYW5kPiB7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZWxlY3RBbGxSb3dzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZWxlY3RBbGxSb3dzQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2VsZWN0QWxsUm93c0NvbW1hbmQpOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGUuc2VsZWN0QWxsKCk7XG5cdH1cblxufVxuIl19