"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useIntersectionObserver = function (target, root) {
    var _a = react_1.useState(false), isIntersecting = _a[0], setIntersecting = _a[1];
    react_1.useEffect(function () {
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