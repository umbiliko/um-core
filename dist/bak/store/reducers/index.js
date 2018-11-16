"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("src/actions/types");
var clear_1 = tslib_1.__importDefault(require("./clear"));
var arithmetic_1 = tslib_1.__importDefault(require("./arithmetic"));
var arithmetic_2 = tslib_1.__importDefault(require("./arithmetic"));
exports.default = (function (state, action) {
    var path = action.path;
    switch (action.type) {
        case types_1.CLEAR:
            return clear_1.default(path, state);
        case types_1.MERGE_IN:
            return state.mergeIn(path, action.payload);
        case types_1.SET_IN:
            return state.setIn(path, action.payload);
        case types_1.UPDATE_IN:
            return state.updateIn(path, action.payload);
        default:
            state = arithmetic_1.default(state, action);
            state = arithmetic_2.default(state, action);
            break;
    }
    return state;
});
//# sourceMappingURL=index.js.map