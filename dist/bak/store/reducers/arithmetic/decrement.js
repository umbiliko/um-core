"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (keys, state, amount) {
    var value = state.getIn(keys);
    if (typeof value !== 'number') {
        return state;
    }
    return state.setIn(keys, value - (amount || 1));
});
//# sourceMappingURL=decrement.js.map