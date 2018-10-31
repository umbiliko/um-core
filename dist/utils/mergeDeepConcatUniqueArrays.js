"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
// mergeDeep that concats arrays instead or replacing it but wont append if exists
function mergeDeepConcatUniqueArrays(state, value) {
    var mergeArrays = function (data, basePath) {
        var next = data;
        data.forEach(function (v, k) {
            var path = basePath.concat([k]);
            if (immutable_1.List.isList(v)) {
                if (state.hasIn(path)) {
                    var current = state.getIn(path);
                    if (immutable_1.List.isList(current) && !current.isEmpty()) {
                        state = state.setIn(path, immutable_1.List(immutable_1.Set(current).merge(v)));
                        next = next.delete(k);
                    }
                }
            }
            else if (immutable_1.Map.isMap(v)) {
                next = next.set(k, mergeArrays(v, path));
            }
        });
        return next;
    };
    var updatedData = mergeArrays(immutable_1.fromJS(value), []);
    return state.mergeDeep(updatedData);
}
exports.default = mergeDeepConcatUniqueArrays;
//# sourceMappingURL=mergeDeepConcatUniqueArrays.js.map