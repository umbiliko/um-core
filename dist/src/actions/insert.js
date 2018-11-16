"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.default = (function (path, payload, at) {
    if (at === void 0) { at = undefined; }
    return ({
        at: at,
        path: path,
        payload: payload,
        type: types_1.INSERT
    });
});
//# sourceMappingURL=insert.js.map