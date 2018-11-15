"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("@um/base/actions/arithmetic/types");
var decrement_1 = tslib_1.__importDefault(require("./decrement"));
var increment_1 = tslib_1.__importDefault(require("./increment"));
exports.default = (function (state, action) {
    var path = action.path;
    switch (action.type) {
        case types_1.DECREMENT:
            return decrement_1.default(path, state, action.amount);
        case types_1.INCREMENT:
            return increment_1.default(path, state, action.amount);
    }
    return state;
});
//# sourceMappingURL=index.js.map