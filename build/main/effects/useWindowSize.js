"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var throttle_1 = require("./throttle");
var events = new Set();
var onResize = function () { return events.forEach(function (fn) { return fn(); }); };
exports.useWindowSize = function (options) {
    if (options === void 0) { options = {}; }
    var _a = options.throttleMs, throttleMs = _a === void 0 ? 100 : _a;
    var _b = react_1.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    }), size = _b[0], setSize = _b[1];
    var handle = throttle_1.throttle(function () {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, throttleMs);
    react_1.useEffect(function () {
        if (events.size === 0) {
            window.addEventListener('resize', onResize, true);
        }
        events.add(handle);
        return function () {
            events.delete(handle);
            if (events.size === 0) {
                window.removeEventListener('resize', onResize, true);
            }
        };
    }, []);
    return size;
};
//# sourceMappingURL=useWindowSize.js.map