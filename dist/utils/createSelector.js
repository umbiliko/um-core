"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
// create a "selector creator" that uses ===
var createSelector = reselect_1.createSelectorCreator(reselect_1.defaultMemoize);
exports.default = createSelector;
//# sourceMappingURL=createSelector.js.map