"use strict";
// import { createCache, createResource/*, SimpleCache*/ } from 'simple-cache-provider';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (method) {
    var resolved = new Map();
    // const cache = createCache();
    // const resource = createResource(method);
    return {
        read: function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!resolved.has(key)) {
                throw method.apply(void 0, args).then(function (val) { return resolved.set(key, val); });
            }
            return resolved.get(key);
        }
    };
});
//# sourceMappingURL=createFetcher.js.map