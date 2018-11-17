"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useProgress = function (animate, duration) {
    var _a = react_1.useState(0), progress = _a[0], setProgress = _a[1];
    react_1.useEffect(function () {
        if (animate) {
            var rafId_1;
            var start_1;
            var step_1 = function (timestamp) {
                if (!start_1) {
                    start_1 = timestamp;
                    var progress_1 = timestamp - start_1;
                    setProgress(progress_1);
                    if (progress_1 < duration) {
                        rafId_1 = requestAnimationFrame(step_1);
                    }
                }
            };
            rafId_1 = requestAnimationFrame(step_1);
            return function () { return cancelAnimationFrame(rafId_1); };
        }
    }, [animate, duration]);
    return progress;
};
//# sourceMappingURL=useProgress.js.map