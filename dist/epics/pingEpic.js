"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ofType } from 'redux-observable';
var operators_1 = require("rxjs/operators");
var pingEpic = function (action$, state) { return action$.pipe(operators_1.filter(function (action) { return action.type === 'PING'; }), operators_1.delay(1000), // Asynchronously wait 1000ms then continue
operators_1.mapTo({ type: 'PONG' })); };
exports.default = pingEpic;
//# sourceMappingURL=pingEpic.js.map