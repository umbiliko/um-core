"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AppModel_1 = require("./AppModel");
exports.useAppModel = function (initialState) {
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var reduce = function (action) {
        switch (action.type) {
            case AppModel_1.DO_SOMETHING: return state.set('something', action.value);
            case AppModel_1.DO_ANOTHER: return state.set('another', action.amount);
        }
        return state;
    };
    var dispatch = function (action) { setState(reduce(action)); };
    var doSomething = function () { return dispatch({ type: AppModel_1.DO_SOMETHING, value: 'hello' }); };
    react_1.useEffect(function () {
    }, []);
    var model = {
        dispatch: dispatch,
        doSomething: doSomething,
        setState: setState,
        state: state
    };
    return model;
};
//# sourceMappingURL=useAppModel.js.map