"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (v1, v2) {
    if (typeof v1 === 'string' && typeof v2 === 'string') {
        v1 = v1.toUpperCase();
        v2 = v2.toUpperCase();
        return v1.localeCompare(v2);
    }
    if (v1 == v2) {
        return 0;
    }
    return v1 < v2 ? -1 : 1;
});
//# sourceMappingURL=caseInsensitiveComparator.js.map