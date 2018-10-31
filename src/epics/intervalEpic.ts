import { Action } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { interval } from 'rxjs';
import { filter, mapTo, takeUntil, switchMap } from 'rxjs/operators';
import { INCREMENT } from '@um/base/actions/arithmetic/types';
import { INTERVAL, _END } from '@um/base/actions/reactive/types';
import { Interval } from '@um/base/types/actions/reactive';
import { State } from '@um/base/types';

const isStop = (stopAction: Action<string>, action: Action<string>): boolean =>
    (stopAction.type.length === (action.type.length + _END.length)) &&
    stopAction.type.startsWith(action.type) &&
    stopAction.type.endsWith(_END);

const intervalEpic = (action$: ActionsObservable<Action<any>>, state: StateObservable<State>)/*: ActionsObservable<Action<any>>*/ => action$.pipe(
    filter((startAction: Interval) => startAction.type === INTERVAL && !!state.value.interval[startAction.type]),
    switchMap((startAction: Interval) =>
        interval(startAction.duration || 100).pipe(
            // increment interval count
            mapTo({ type: INCREMENT, path: ['interval', startAction.callback.type ] }),
            mapTo(startAction.callback),
            takeUntil(action$.pipe(
                filter((stopAction: Action<any>) => isStop(stopAction, startAction.callback)),
                mapTo({ type: INCREMENT /*CLEAR*/, path: ['interval', startAction.callback.type ] }),
            )
        ))
    )
);

export default intervalEpic;