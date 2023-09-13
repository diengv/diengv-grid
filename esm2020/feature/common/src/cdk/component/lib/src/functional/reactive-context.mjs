import { ChangeDetectorRef, inject } from '@angular/core';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
export function useReactiveContext(stream$, cd) {
    const unsub$ = new HermesSubject();
    let changeDetector;
    if (cd) {
        changeDetector = cd;
    }
    else {
        changeDetector = inject(ChangeDetectorRef);
    }
    let innerStream$;
    if (stream$) {
        innerStream$ = stream$.pipe(hermesTakeUntil(unsub$));
    }
    changeDetector.onDestroy(() => {
        unsub$.next();
        unsub$.complete();
    });
    const context = {
        connect: (stream$) => {
            innerStream$ = stream$.pipe(hermesTakeUntil(unsub$));
            return context;
        },
        subscribe(next, error, complete) {
            return innerStream$.subscribe(next, error, complete);
        },
        subscribeAndRender(next, error, complete) {
            return innerStream$.subscribe((v) => {
                next(v);
                changeDetector.detectChanges();
            }, error, complete);
        },
        unsubscribe() {
            unsub$.next();
            unsub$.complete();
        }
    };
    return context;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9mdW5jdGlvbmFsL3JlYWN0aXZlLWNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQW9CLGFBQWEsRUFBc0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFjMUcsTUFBTSxVQUFVLGtCQUFrQixDQUFJLE9BQTZCLEVBQUUsRUFBc0I7SUFFMUYsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztJQUV6QyxJQUFJLGNBQTZDLENBQUM7SUFFbEQsSUFBSSxFQUFFLEVBQUU7UUFDUCxjQUFjLEdBQUcsRUFBRSxDQUFDO0tBQ3BCO1NBQU07UUFDTixjQUFjLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDM0M7SUFFRCxJQUFJLFlBQTZDLENBQUM7SUFFbEQsSUFBSSxPQUFPLEVBQUU7UUFDWixZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNyRDtJQUVBLGNBQTBCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUMxQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRztRQUNmLE9BQU8sRUFBRSxDQUFDLE9BQTRCLEVBQUUsRUFBRTtZQUN6QyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRCxPQUFPLE9BQU8sQ0FBQztRQUNoQixDQUFDO1FBQ0QsU0FBUyxDQUFDLElBQXlCLEVBQUUsS0FBd0IsRUFBRSxRQUFxQjtZQUNuRixPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQ0Qsa0JBQWtCLENBQUMsSUFBeUIsRUFBRSxLQUF3QixFQUFFLFFBQXFCO1lBQzVGLE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLENBQUMsRUFDRCxLQUFLLEVBQ0wsUUFBUSxDQUNSLENBQUM7UUFDSCxDQUFDO1FBQ0QsV0FBVztZQUNWLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQixDQUFDO0tBQ3FCLENBQUM7SUFDeEIsT0FBTyxPQUFPLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBpbmplY3QsIFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIEhlcm1lc1N1YnNjcmlwdGlvbiwgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWFjdGl2ZUNvbnRleHQ8VD4ge1xuXG5cdGNvbm5lY3Q8VD4oc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPik6IFJlYWN0aXZlQ29udGV4dDxUPjtcblxuXHRzdWJzY3JpYmUobmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZTogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cblx0c3Vic2NyaWJlQW5kUmVuZGVyKG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsIGVycm9yPzogKGU6IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXG5cdHVuc3Vic2NyaWJlKCk6IHZvaWQ7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlYWN0aXZlQ29udGV4dDxUPihzdHJlYW0kPzogSGVybWVzT2JzZXJ2YWJsZTxUPiwgY2Q/OiBDaGFuZ2VEZXRlY3RvclJlZik6IFJlYWN0aXZlQ29udGV4dDxUPiB7XG5cblx0Y29uc3QgdW5zdWIkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRsZXQgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmIHwgdW5kZWZpbmVkO1xuXG5cdGlmIChjZCkge1xuXHRcdGNoYW5nZURldGVjdG9yID0gY2Q7XG5cdH0gZWxzZSB7XG5cdFx0Y2hhbmdlRGV0ZWN0b3IgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bGV0IGlubmVyU3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPiB8IHVuZGVmaW5lZDtcblxuXHRpZiAoc3RyZWFtJCkge1xuXHRcdGlubmVyU3RyZWFtJCA9IHN0cmVhbSQucGlwZShoZXJtZXNUYWtlVW50aWwodW5zdWIkKSk7XG5cdH1cblxuXHQoY2hhbmdlRGV0ZWN0b3IgYXMgVmlld1JlZikub25EZXN0cm95KCgpID0+IHtcblx0XHR1bnN1YiQubmV4dCgpO1xuXHRcdHVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9KTtcblxuXHRjb25zdCBjb250ZXh0ID0ge1xuXHRcdGNvbm5lY3Q6IChzdHJlYW0kOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KSA9PiB7XG5cdFx0XHRpbm5lclN0cmVhbSQgPSBzdHJlYW0kLnBpcGUoaGVybWVzVGFrZVVudGlsKHVuc3ViJCkpO1xuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0fSxcblx0XHRzdWJzY3JpYmUobmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZTogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXHRcdFx0cmV0dXJuIGlubmVyU3RyZWFtJC5zdWJzY3JpYmUobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcblx0XHR9LFxuXHRcdHN1YnNjcmliZUFuZFJlbmRlcihuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLCBlcnJvcj86IChlOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cdFx0XHRyZXR1cm4gaW5uZXJTdHJlYW0kLnN1YnNjcmliZSgodikgPT4ge1xuXHRcdFx0XHRcdG5leHQodik7XG5cdFx0XHRcdFx0Y2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcixcblx0XHRcdFx0Y29tcGxldGVcblx0XHRcdCk7XG5cdFx0fSxcblx0XHR1bnN1YnNjcmliZSgpOiB2b2lkIHtcblx0XHRcdHVuc3ViJC5uZXh0KCk7XG5cdFx0XHR1bnN1YiQuY29tcGxldGUoKTtcblx0XHR9XG5cdH0gYXMgUmVhY3RpdmVDb250ZXh0PFQ+O1xuXHRyZXR1cm4gY29udGV4dDtcbn1cbiJdfQ==