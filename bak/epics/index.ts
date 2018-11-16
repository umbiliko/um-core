import * as Immutable from 'immutable';
import { Action } from 'redux';
import { combineEpics, Epic, ActionsObservable, StateObservable } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { State } from '@um/base/types';
import intervalEpic from './intervalEpic';
import pingEpic from './pingEpic';
import rotateEpic from './rotateEpic';

const epic$ = new BehaviorSubject(combineEpics(
    intervalEpic,
    pingEpic,
    rotateEpic
));

const rootEpic = (action$: ActionsObservable<Action<any>>, state$: StateObservable<Immutable.Map<string, any>>) => epic$.pipe(
    mergeMap((epic: Epic) => epic(action$, state$, null))
);

export function addEpic(epic: Epic<Action<any>, Action<any>, State, any>) {
    epic$.next(epic);
}

export default rootEpic;