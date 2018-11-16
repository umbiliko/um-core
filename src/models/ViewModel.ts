import { ImmutableModel } from './ImmutableModel';
import { Element } from 'ntt-view';
import { ReactNode } from 'react';

export interface ViewConfig {
    AppBar: (props: any) => ReactNode;
    Button: (props: any) => ReactNode;
    Chart: (props: any) => ReactNode;
    DatePicker: (props: any) => ReactNode;
    DateTimePicker: (props: any) => ReactNode;
    Dialog: (props: any) => ReactNode;
    Form: (props: any) => ReactNode;
    Grid: (props: any) => ReactNode;
    Menu: (props: any) => ReactNode;
    MenuItem: (props: any) => ReactNode;
    MessageBox: (props: any) => ReactNode;
    List: (props: any) => ReactNode;
    ListItem: (props: any) => ReactNode;
    Panel: (props: any) => ReactNode;
    Slide: (props: any) => ReactNode;
    Slider: (props: any) => ReactNode;
    Spinner: (props: any) => ReactNode;
    Statusbar: (props: any) => ReactNode;
    Tab: (props: any) => ReactNode;
    Tabs: (props: any) => ReactNode;
    TimePicker: (props: any) => ReactNode;
    Toolbar: (props: any) => ReactNode;
    Tree: (props: any) => ReactNode;
    TreeItem: (props: any) => ReactNode;
    Zoom: (props: any) => ReactNode;
}

export interface ViewState extends FlatObject {
    theme: string;
}

export interface ViewModel extends ImmutableModel<ViewState> {
    config: ViewConfig;
    render: (element: Element) => ReactNode;
    setTheme: (theme: string) => void;
}
