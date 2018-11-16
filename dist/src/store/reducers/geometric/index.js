"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("@um/base/actions/geometric/types");
var reflect_1 = tslib_1.__importDefault(require("./reflect"));
var rotate_1 = tslib_1.__importDefault(require("./rotate"));
var translate_1 = tslib_1.__importDefault(require("./translate"));
exports.default = (function (state, action) {
    var path = action.path;
    switch (action.type) {
        case types_1.REFLECTION:
            return reflect_1.default(path, state, action.vector);
        case types_1.ROTATION:
            return rotate_1.default(path, state, action.vector);
        case types_1.TRANSLATION:
            return translate_1.default(path, state, action.vector);
    }
    return state;
});
//# sourceMappingURL=index.js.map