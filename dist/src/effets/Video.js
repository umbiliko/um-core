"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var createResource_1 = require("./createResource");
exports.VideoResource = createResource_1.createResource(function (src) {
    return new Promise(function (resolve, reject) {
        var video = document.createElement('video');
        video.src = src;
        video.oncanplay = function () {
            resolve(video);
        };
        video.onerror = reject;
    });
});
exports.Video = function (props) {
    exports.VideoResource.read(props.src);
    return <video {...props}/>;
};
//# sourceMappingURL=Video.js.map