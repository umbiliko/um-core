import { ImmutableModel } from './ImmutableModel';

export interface ViewState extends FlatObject {
    theme: string;
}

export interface ViewModel extends ImmutableModel<ViewState> {
    setTheme: (theme: string) => void;
}
