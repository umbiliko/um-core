"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Immutable = tslib_1.__importStar(require("immutable"));
var redux_1 = require("redux");
var redux_immutable_1 = require("redux-immutable");
var initialState = Immutable.Map();
var rootReducer = redux_immutable_1.combineReducers({});
var store = redux_1.createStore(rootReducer, initialState);
exports.default = store;
//# sourceMappingURL=index.js.map