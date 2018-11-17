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
exports.ScriptResource = createResource_1.createResource(function (_a) {
    var src = _a.src;
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function () { return resolve(script); };
        script.onerror = reject;
        document.body.appendChild(script);
    });
});
exports.Script = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
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