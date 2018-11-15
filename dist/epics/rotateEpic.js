"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ofType } from 'redux-observable';
var operators_1 = require("rxjs/operators");
var rotateEpic /*: Epic<Action, State>*/ = function (action$, state) {
    return action$.pipe(operators_1.filter(function (action) { return action.type === 'ROTATION'; }), operators_1.delay(1000) // Asynchronously wait 1000ms then continue
    // .mapTo({ type: GEOMETRY_ROTATE_3D_MATRIX });
    /* .mergeMap((action: WeatherAction) =>
      getWeather(action.params.lat, action.params.lng)
        .map(payload => weatherSetAction(payload))
    ) */ );
};
exports.default = rotateEpic;
//# sourceMappingURL=rotateEpic.js.map