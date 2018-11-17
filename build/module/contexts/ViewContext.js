import { fromJS } from 'immutable';
import { createContext } from 'react';
import { NotImplemented } from '../components';
const config = {
    AppBar: NotImplemented,
    Button: NotImplemented,
    Chart: NotImplemented,
    DatePicker: NotImplemented,
    DateTimePicker: NotImplemented,
    Dialog: NotImplemented,
    Form: NotImplemented,
    Grid: NotImplemented,
    Menu: NotImplemented,
    MenuItem: NotImplemented,
    MessageBox: NotImplemented,
    List: NotImplemented,
    ListItem: NotImplemented,
    Panel: NotImplemented,
    Slide: NotImplemented,
    Slider: NotImplemented,
    Spinner: NotImplemented,
    Statusbar: NotImplemented,
    Tab: NotImplemented,
    Tabs: NotImplemented,
    TimePicker: NotImplemented,
    Toolbar: NotImplemented,
    Tree: NotImplemented,
    TreeItem: NotImplemented,
    Zoom: NotImplemented
};
const render = (element) => {
    const def = config[element.type] || null;
    switch (element.type) {
        case 'AppBar':
            return null;
    }
    return def;
};
export const ViewContext = createContext({
    ...config,
    render,
    setTheme: (theme) => { },
    setState: (key, value) => { },
    state: fromJS({
        theme: 'light'
    })
});
//# sourceMappingURL=ViewContext.js.map