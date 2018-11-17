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
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var react_1 = require("react");
var components_1 = require("../components");
var config = {
    AppBar: components_1.NotImplemented,
    Button: components_1.NotImplemented,
    Chart: components_1.NotImplemented,
    DatePicker: components_1.NotImplemented,
    DateTimePicker: components_1.NotImplemented,
    Dialog: components_1.NotImplemented,
    Form: components_1.NotImplemented,
    Grid: components_1.NotImplemented,
    Menu: components_1.NotImplemented,
    MenuItem: components_1.NotImplemented,
    MessageBox: components_1.NotImplemented,
    List: components_1.NotImplemented,
    ListItem: components_1.NotImplemented,
    Panel: components_1.NotImplemented,
    Slide: components_1.NotImplemented,
    Slider: components_1.NotImplemented,
    Spinner: components_1.NotImplemented,
    Statusbar: components_1.NotImplemented,
    Tab: components_1.NotImplemented,
    Tabs: components_1.NotImplemented,
    TimePicker: components_1.NotImplemented,
    Toolbar: components_1.NotImplemented,
    Tree: components_1.NotImplemented,
    TreeItem: components_1.NotImplemented,
    Zoom: components_1.NotImplemented
};
var render = function (element) {
    var def = config[element.type] || null;
    switch (element.type) {
        case 'AppBar':
            return null;
    }
    return def;
};
exports.ViewContext = react_1.createContext(__assign({}, config, { render: render, setTheme: function (theme) { }, setState: function (key, value) { }, state: immutable_1.fromJS({
        theme: 'light'
    }) }));
//# sourceMappingURL=ViewContext.js.map