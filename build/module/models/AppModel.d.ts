import { Dispatch, SetStateAction } from 'react';
import { ContextState } from './ContextModel';
export declare const DO_SOMETHING = "DO_SOMETHING";
export declare const DO_ANOTHER = "DO_ANOTHER";
export interface AppActions {
    DO_SOMETHING: {
        type: typeof DO_SOMETHING;
        value: string;
    };
    DO_ANOTHER: {
        type: typeof DO_ANOTHER;
        amount: number;
    };
}
export declare type AppAction = AppActions[keyof AppActions];
export interface AppState {
    another: number;
    something: string;
}
export interface AppModel {
    dispatch: (action: AppAction) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<ContextState<AppState>>>;
    state: ContextState<AppState>;
}
