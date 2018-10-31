"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("../actions/types");
var concat_1 = tslib_1.__importDefault(require("./concat"));
var clear_1 = tslib_1.__importDefault(require("./clear"));
var decrement_1 = tslib_1.__importDefault(require("./decrement"));
var delete_1 = tslib_1.__importDefault(require("./delete"));
var increment_1 = tslib_1.__importDefault(require("./increment"));
var insert_1 = tslib_1.__importDefault(require("./insert"));
var patch_1 = tslib_1.__importDefault(require("./patch"));
var remove_1 = tslib_1.__importDefault(require("./remove"));
var shift_1 = tslib_1.__importDefault(require("./shift"));
var update_1 = tslib_1.__importDefault(require("./update"));
var unshift_1 = tslib_1.__importDefault(require("./unshift"));
exports.default = (function (state, action) {
    var path = action.path;
    switch (action.type) {
        case types_1.CONCAT:
            return concat_1.default(path, state, action.payload);
        case types_1.CLEAR:
            return clear_1.default(path, state);
        case types_1.DECREMENT:
            return decrement_1.default(path, state, action.amount);
        case types_1.DELETE:
            return delete_1.default(path, state);
        case types_1.INCREMENT:
            return increment_1.default(path, state, action.amount);
        case types_1.INSERT:
            return insert_1.default(path, state, action.payload);
        case types_1.PATCH:
            return patch_1.default(path, state, action.payload);
        case types_1.REMOVE:
            return remove_1.default(path, state);
        case types_1.SHIFT:
            return shift_1.default(path, state);
        case types_1.UNSHIFT:
            return unshift_1.default(path, state);
        case types_1.UPDATE:
            return update_1.default(path, state, action.payload);
    }
    return state;
});
//# sourceMappingURL=index.js.map