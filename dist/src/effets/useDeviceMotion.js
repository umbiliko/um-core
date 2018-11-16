"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.useDeviceMotion = function () {
    var _a = react_1.default.useState({
        acceleration: {
            x: null,
            y: null,
            z: null,
        },
        accelerationIncludingGravity: {
            x: null,
            y: null,
            z: null,
        },
        rotationRate: {
            alpha: null,
            beta: null,
            gamma: null,
        },
        interval: 0,
    }), motion = _a[0], setMotion = _a[1];
    react_1.default.useEffect(function () {
        var handle = function (deviceMotionEvent) {
            setMotion(deviceMotionEvent);
        };
        window.addEventListener('devicemotion', handle);
        return function () {
            window.removeEventListener('devicemotion', handle);
        };
    }, []);
    return motion;
};
//# sourceMappingURL=useDeviceMotion.js.map