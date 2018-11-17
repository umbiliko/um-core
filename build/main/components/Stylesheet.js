"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var createResource_1 = require("../effects/createResource");
exports.StylesheetResource = createResource_1.createResource(load, function (_a) {
    var href = _a.href, media = _a.media;
    return href + "." + media;
});
function load(_a) {
    var href = _a.href, _b = _a.media, media = _b === void 0 ? 'all' : _b;
    return new Promise(function (resolve, reject) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = media;
        link.onload = resolve;
        link.onerror = reject;
        document.body.appendChild(link);
    });
}
exports.Stylesheet = function (props) {
    exports.StylesheetResource.read(props);
    return React.createElement("link", __assign({}, props));
};
function useStylesheet(props) {
    return exports.StylesheetResource.read(props);
}
exports.useStylesheet = useStylesheet;
//# sourceMappingURL=Stylesheet.js.map