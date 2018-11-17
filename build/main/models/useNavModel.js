"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var contexts_1 = require("../contexts");
exports.useNavModel = function () {
    if (!react_1.useContext) {
        throw new Error('React >= 16.3 required');
    }
    return react_1.useContext(contexts_1.NavContext);
};
//# sourceMappingURL=useNavModel.js.map