import { fromJS } from 'immutable';
import { Context, createContext, ReactNode } from 'react';
import { Element } from 'ntt-view';
import { ViewConfig, ViewModel, ViewState } from '../models/ViewModel';
import { NotImplemented } from '../components';

const config: ViewConfig = {
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

const render = (element: Element): ReactNode => {
    const def = config[element.type] || null;
    switch (element.type) {
        case 'AppBar':
            return null;
    }
    return def;
};

export const ViewContext: Context<ViewModel> = createContext<ViewModel>({
    ...config,
    render,
    setTheme: (theme: string) => {},
    setState: (key: keyof ViewState, value: ValueType | null) => {},
    state: fromJS({
        theme: 'light'
    })
});
