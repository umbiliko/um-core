"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.useIntersectionObserver = function (target, root) {
    var _a = react_1.default.useState(false), isIntersecting = _a[0], setIntersecting = _a[1];
    react_1.default.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting !== isIntersecting) {
                setIntersecting(entry.isIntersecting);
            }
        }, {
            rootMargin: '0px',
            root: root.current,
        });
        if (target.current) {
            observer.observe(target.current);
        }
        return function () {
            if (target.current) {
                observer.unobserve(target.current);
            }
        };
    }, []);
    return isIntersecting;
};
//# sourceMappingURL=useIntersectionObserver.js.map