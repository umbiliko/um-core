"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.useDeviceOrientation = function () {
    var _a = react_1.default.useState({
        alpha: null,
        beta: null,
        gamma: null,
        absolute: false,
    }), orientation = _a[0], setOrientation = _a[1];
    var handle = function (e) {
        setOrientation({
            beta: e.beta,
            alpha: e.alpha,
            gamma: e.gamma,
            absolute: e.absolute,
        });
    };
    react_1.default.useEffect(function () {
        window.addEventListener('deviceorientation', handle);
        return function () {
            window.removeEventListener('deviceorientation', handle);
        };
    }, []);
    return orientation;
};
//# sourceMappingURL=useDeviceOrientation.js.map