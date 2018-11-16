"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.default = (function (path, amount) {
    if (amount === void 0) { amount = undefined; }
    return ({
        amount: amount,
        path: path,
        type: types_1.INCREMENT
    });
});
//# sourceMappingURL=increment.js.map