"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var immutable_1 = require("immutable");
var index_1 = require("../../contexts/index");
exports.Viewport = function (_a) {
    var children = _a.children, config = _a.config, props = __rest(_a, ["children", "config"]);
    var _b = react_1.useState(immutable_1.fromJS({
        theme: 'light'
    })), state = _b[0], setState = _b[1];
    var render = function (element) {
        var def = config[element.type] || null;
        switch (element.type) {
            case 'AppBar':
                return null;
        }
        return def;
    };
    var model = __assign({}, config, { render: render, setTheme: function (theme) { return setState(state.set('theme', theme)); }, setState: function (key, value) { return setState(state.set(key, value)); }, state: state });
    return (React.createElement("div", __assign({ className: "Viewport" }, props),
        React.createElement(index_1.ViewContext.Provider, { value: model }, children)));
};
//# sourceMappingURL=Viewport.js.map