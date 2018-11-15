"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var types_1 = require("@um/base/actions/arithmetic/types");
var types_2 = require("@um/base/actions/reactive/types");
var isStop = function (stopAction, action) {
    return (stopAction.type.length === (action.type.length + types_2._END.length)) &&
        stopAction.type.startsWith(action.type) &&
        stopAction.type.endsWith(types_2._END);
};
var intervalEpic = function (action$, state) { return action$.pipe(operators_1.filter(function (startAction) { return startAction.type === types_2.INTERVAL && !!state.value.interval[startAction.type]; }), operators_1.switchMap(function (startAction) {
    return rxjs_1.interval(startAction.duration || 100).pipe(
    // increment interval count
    operators_1.mapTo({ type: types_1.INCREMENT, path: ['interval', startAction.callback.type] }), operators_1.mapTo(startAction.callback), operators_1.takeUntil(action$.pipe(operators_1.filter(function (stopAction) { return isStop(stopAction, startAction.callback); }), operators_1.mapTo({ type: types_1.INCREMENT /*CLEAR*/, path: ['interval', startAction.callback.type] }))));
})); };
exports.default = intervalEpic;
//# sourceMappingURL=intervalEpic.js.map