"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reselect_1 = require("reselect");
var createSelector_1 = tslib_1.__importDefault(require("./createSelector"));
function combineSelectors(selectors, selectorCreator) {
    if (selectorCreator === void 0) { selectorCreator = createSelector_1.default; }
    return reselect_1.createStructuredSelector(selectors, selectorCreator);
}
exports.default = combineSelectors;
//# sourceMappingURL=combineSelectors.js.map