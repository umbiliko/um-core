"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var createResource_1 = require("./createResource");
exports.ScriptResource = createResource_1.createResource(function (_a) {
    var src = _a.src;
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function () { return resolve(script); };
        script.onerror = reject;
        // @todo decide if this is sensible.
        // script.async = true
        document.body.appendChild(script);
    });
});
exports.Script = function (_a) {
    var children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    exports.ScriptResource.read(rest);
    if (typeof children === 'function') {
        return children();
    }
    return children;
};
function useScript(_a) {
    var src = _a.src;
    return exports.ScriptResource.read({ src: src });
}
exports.useScript = useScript;
//# sourceMappingURL=Script.js.map