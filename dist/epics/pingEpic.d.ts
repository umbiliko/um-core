import { Action } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';
declare const pingEpic: (action$: ActionsObservable<Action<any>>, state: StateObservable<any>) => import("rxjs/internal/Observable").Observable<{
    type: string;
}>;
export default pingEpic;
