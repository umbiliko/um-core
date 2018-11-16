"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.useNetworkStatus = function () {
    var _a = react_1.default.useState(navigator.onLine), status = _a[0], setStatus = _a[1];
    var _b = react_1.default.useState(undefined), offlineAt = _b[0], setOfflineAt = _b[1];
    react_1.default.useEffect(function () {
        var handleOnline = function () {
            setStatus(true);
            setOfflineAt(undefined);
        };
        var handleOffline = function () {
            setStatus(false);
            setOfflineAt(new Date());
        };
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return function () {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    return {
        isOnline: status,
        offlineAt: offlineAt,
    };
};
//# sourceMappingURL=useNetworkStatus.js.map