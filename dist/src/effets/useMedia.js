"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var json2mq_1 = tslib_1.__importDefault(require("json2mq"));
function useMedia(query, defaultMatches) {
    if (defaultMatches === void 0) { defaultMatches = true; }
    var _a = react_1.useState(defaultMatches), matches = _a[0], setMatches = _a[1];
    react_1.useEffect(function () {
        var mediaQueryList = window.matchMedia(typeof query === 'string' ? query : json2mq_1.default(query));
        var active = true;
        var listener = function () {
            if (!active) {
                return;
            }
            if (mediaQueryList.matches) {
                setMatches(true);
            }
            else {
                setMatches(false);
            }
        };
        mediaQueryList.addListener(listener);
        setMatches(mediaQueryList.matches);
        return function () {
            active = false;
            mediaQueryList.removeListener(listener);
        };
    }, [query]);
    return matches;
}
exports.useMedia = useMedia;
//# sourceMappingURL=useMedia.js.map