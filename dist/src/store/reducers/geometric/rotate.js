"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("src/utils");
exports.default = (function (arrPath, state, vector) {
    var rotation = function (axis, ang) {
        if (typeof ang === 'number' && ang !== 0 && ang !== NaN) {
            var cos_1 = Math.cos(ang);
            var sin_1 = Math.sin(ang);
            return function (point) { return utils_1.rotate(point, axis, cos_1, sin_1); };
        }
        return function (point) { return point; };
    };
    var rotateX = rotation({ x: 1, y: 0, z: 0 }, vector.x);
    var rotateY = rotation({ x: 0, y: 1, z: 0 }, vector.y);
    var rotateZ = rotation({ x: 0, y: 0, z: 1 }, vector.z);
    var source = utils_1.getIn(arrPath, state);
    if (utils_1.isMatrix(source)) {
        return utils_1.setIn(arrPath, state, {
            x: rotateZ(rotateY(rotateX(tslib_1.__assign({}, source.x)))),
            y: rotateZ(rotateY(rotateX(tslib_1.__assign({}, source.y)))),
            z: rotateZ(rotateY(rotateX(tslib_1.__assign({}, source.z))))
        });
    }
    else if (utils_1.isVector(source)) {
        return utils_1.setIn(arrPath, state, rotateZ(rotateY(rotateX(tslib_1.__assign({}, source)))));
    }
    return state;
});
//# sourceMappingURL=rotate.js.map