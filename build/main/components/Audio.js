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
    return React.createElement("audio", __assign({}, props));
};
//# sourceMappingURL=Audio.js.map