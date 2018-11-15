import { Action } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';
declare const rotateEpic: (action$: ActionsObservable<Action<any>>, state: StateObservable<any>) => import("rxjs/internal/Observable").Observable<Action<any>>;
export default rotateEpic;
