"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reselect_1 = require("reselect");
var deepEqualityCheck_1 = tslib_1.__importDefault(require("./deepEqualityCheck"));
// create a "selector creator" that uses lodash.isEqual instead of ===
var createDeepEqualSelector = reselect_1.createSelectorCreator(reselect_1.defaultMemoize, deepEqualityCheck_1.default);
exports.default = createDeepEqualSelector;
/*
// use the new "selector creator" to create a selector
const mySelector = createDeepEqualSelector(
    state => state.values.filter(val => val < 5),
    values => values.reduce((acc, val) => acc + val, 0)
);
*/ 
//# sourceMappingURL=createDeepEqualSelector.js.map