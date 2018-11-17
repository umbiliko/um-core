"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createResource_1 = require("../effects/createResource");
exports.PreloadResource = createResource_1.createResource(load, function (_a) {
    var href = _a.href, as = _a.as;
    return href + "." + as;
});
function load(_a) {
    var href = _a.href, as = _a.as, _b = _a.media, media = _b === void 0 ? 'all' : _b;
    return new Promise(function (resolve, reject) {
        var link = document.createElement('link');
        link.rel = 'preload';
        link.as = as;
        link.media = media;
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.body.appendChild(link);
    });
}
exports.Preload = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    exports.PreloadResource.read(rest);
    if (typeof children === 'function') {
        return children();
    }
    return children;
};
//# sourceMappingURL=Preload.js.map