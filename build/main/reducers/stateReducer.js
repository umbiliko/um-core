"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var RESET = 'RESET';
var SET = 'SET';
var SET_IN = 'SET_IN';
var UPDATE = 'UPDATE';
var UPDATE_IN = 'UPDATE_IN';
exports.actions = {
    reset: function (next) { return ({ next: next, type: RESET }); },
    set: function (key, value) { return ({ key: key, type: SET, value: value }); },
    setIn: function (keyPath, value) { return ({ keyPath: keyPath, type: SET_IN, value: value }); },
    update: function (key, value) { return ({ key: key, type: UPDATE, value: value }); },
    updateIn: function (keyPath, value) { return ({ keyPath: keyPath, type: UPDATE_IN, value: value }); },
};
exports.default = (function (state, action) {
    if (!immutable_1.Map.isMap(state)) {
        return state;
    }
    switch (action.type) {
        case RESET: return action.next;
        case SET: return state.set(action.key, action.value);
        case SET_IN: return state.setIn(action.keyPath, action.value);
        case UPDATE: return state.update(action.key, action.value);
        case UPDATE_IN: return state.updateIn(action.keyPath, action.value);
        default: return state;
    }
});
//# sourceMappingURL=stateReducer.js.map