"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var createResource_1 = require("./createResource");
var PositionResource = createResource_1.createResource(load, function (positionOptions) { return 'geoposition'; });
function load(positionOptions) {
    return new Promise(function (resolve, reject) {
        return navigator.geolocation.getCurrentPosition(function (position) {
            resolve(position);
        }, function (error) {
            reject(error);
        }, positionOptions);
    });
}
exports.useGeoPosition = function (positionOptions) {
    // We should read new initialCoords for each component but useMemo
    // does not seem to memoize when a component is suspended
    // @todo determine if this is intended behavior or a bug
    // const initialAccessTime = React.useMemo(() => Date.now(), []);
    var initialCoords = PositionResource.read();
    var _a = react_1.default.useState(initialCoords), position = _a[0], setPosition = _a[1];
    react_1.default.useEffect(function () {
        var listener = navigator.geolocation.watchPosition(function (positionUpdate) {
            setPosition(positionUpdate);
        }, function () { return null; }, positionOptions);
        return function () { return navigator.geolocation.clearWatch(listener); };
    }, []);
    return position;
};
//# sourceMappingURL=useGeoPosition.js.map