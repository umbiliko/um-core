"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var createResource_1 = require("./createResource");
exports.AudioResource = createResource_1.createResource(function (src) {
    return new Promise(function (resolve, reject) {
        var audio = document.createElement('audio');
        audio.src = src;
        audio.onloadeddata = function () { return resolve(audio); };
        audio.onerror = reject;
        document.body.append(audio);
    });
});
exports.Audio = function (props) {
    exports.AudioResource.read(props.src);
    return <audio {...props}/>;
};
//# sourceMappingURL=Audio.js.map