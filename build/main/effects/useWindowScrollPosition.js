"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var throttle_1 = require("./throttle");
exports.useWindowScrollPosition = function (_a) {
    var _b = (_a === void 0 ? {} : _a).throttleMs, throttleMs = _b === void 0 ? 100 : _b;
    var _c = react_1.useState({
        x: window.pageXOffset,
        y: window.pageYOffset,
    }), scroll = _c[0], setScroll = _c[1];
    var handle = throttle_1.throttle(function () {
        setScroll({
            x: window.pageXOffset,
            y: window.pageYOffset,
        });
    }, throttleMs);
    react_1.useEffect(function () {
        window.addEventListener('scroll', handle);
        return function () {
            window.removeEventListener('scroll', handle);
        };
    }, []);
    return scroll;
};
//# sourceMappingURL=useWindowScrollPosition.js.map