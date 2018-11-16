"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var redux_observable_1 = require("redux-observable");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var intervalEpic_1 = tslib_1.__importDefault(require("./intervalEpic"));
var pingEpic_1 = tslib_1.__importDefault(require("./pingEpic"));
var rotateEpic_1 = tslib_1.__importDefault(require("./rotateEpic"));
var epic$ = new rxjs_1.BehaviorSubject(redux_observable_1.combineEpics(intervalEpic_1.default, pingEpic_1.default, rotateEpic_1.default));
var rootEpic = function (action$, state$) { return epic$.pipe(operators_1.mergeMap(function (epic) { return epic(action$, state$, null); })); };
function addEpic(epic) {
    epic$.next(epic);
}
exports.addEpic = addEpic;
exports.default = rootEpic;
//# sourceMappingURL=index.js.map