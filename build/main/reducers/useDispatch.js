"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDispatch = function (reducer, state, setState) { return function (action) { return setState(reducer(state, action)); }; };
//# sourceMappingURL=useDispatch.js.map