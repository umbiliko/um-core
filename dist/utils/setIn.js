"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
exports.default = (function (root, keyPath, value) {
    if (immutable_1.Map.isMap(root)) {
        return root.setIn(keyPath, value);
    }
});
//# sourceMappingURL=setIn.js.map