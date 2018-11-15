import { Action } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';
declare const intervalEpic: (action$: ActionsObservable<Action<any>>, state: StateObservable<any>) => import("rxjs/internal/Observable").Observable<any>;
export default intervalEpic;
