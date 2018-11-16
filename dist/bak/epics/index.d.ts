import * as Immutable from 'immutable';
import { Action } from 'redux';
import { Epic, ActionsObservable, StateObservable } from 'redux-observable';
import { State } from '@um/base/types';
declare const rootEpic: (action$: ActionsObservable<Action<any>>, state$: StateObservable<Immutable.Map<string, any>>) => import("rxjs/internal/Observable").Observable<any>;
export declare function addEpic(epic: Epic<Action<any>, Action<any>, State, any>): void;
export default rootEpic;
