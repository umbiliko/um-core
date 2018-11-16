"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var createResource_1 = require("./createResource");
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
    return <img {...props}/>;
};
//# sourceMappingURL=Img.js.map