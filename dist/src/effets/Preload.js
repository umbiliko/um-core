"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var createResource_1 = require("./createResource");
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
    var children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    exports.PreloadResource.read(rest);
    if (typeof children === 'function') {
        return children();
    }
    return children;
};
//# sourceMappingURL=Preload.js.map