"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
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
    var initialCoords = PositionResource.read();
    var _a = react_1.useState(initialCoords), position = _a[0], setPosition = _a[1];
    react_1.useEffect(function () {
        var listener = navigator.geolocation.watchPosition(function (positionUpdate) {
            setPosition(positionUpdate);
        }, function () { return null; }, positionOptions);
        return function () { return navigator.geolocation.clearWatch(listener); };
    }, []);
    return position;
};
//# sourceMappingURL=useGeoPosition.js.map