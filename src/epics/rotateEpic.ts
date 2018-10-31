import * as Immutable from 'immutable';
// import { ofType } from 'redux-observable';
import { delay, filter, mapTo, mergeMap } from 'rxjs/operators';
import { Action } from 'redux';
import { Epic, ActionsObservable, StateObservable } from 'redux-observable';
import { State } from '@um/base/types';

const rotateEpic /*: Epic<Action, State>*/ = (action$: ActionsObservable<Action<any>>, state: StateObservable<State>)/*: ActionsObservable<Action<any>>*/ =>
    action$.pipe(
        filter((action: Action<any>) => action.type === 'ROTATION'),
        delay(1000) // Asynchronously wait 1000ms then continue
    // .mapTo({ type: GEOMETRY_ROTATE_3D_MATRIX });
    /* .mergeMap((action: WeatherAction) =>
      getWeather(action.params.lat, action.params.lng)
        .map(payload => weatherSetAction(payload))
    ) */);

  export default rotateEpic;