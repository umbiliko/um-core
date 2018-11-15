"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var immutable_1 = require("immutable");
var context = react_1.createContext(immutable_1.fromJS({}));
exports.provider = context.Provider;
exports.consumer = context.Consumer;
exports.default = context;
//# sourceMappingURL=Data.js.map