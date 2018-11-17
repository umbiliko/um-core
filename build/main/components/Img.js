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
var hashingFn = function (_a) {
    var src = _a.src, srcSet = _a.srcSet;
    return "" + src + srcSet;
};
exports.ImgResource = createResource_1.createResource(function (_a) {
    var src = _a.src, srcSet = _a.srcSet;
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.src = src;
        if (srcSet) {
            image.srcset = srcSet;
        }
        image.onload = resolve;
        image.onerror = reject;
    });
}, hashingFn);
exports.Img = function (props) {
    var src = props.src, srcSet = props.srcSet;
    if (src) {
        exports.ImgResource.read({ src: src, srcSet: srcSet });
    }
    return React.createElement("img", __assign({}, props));
};
//# sourceMappingURL=Img.js.map