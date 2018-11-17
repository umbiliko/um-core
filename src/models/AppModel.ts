import { Dispatch, SetStateAction } from 'react';
import { ContextState } from './ContextModel';

export const DO_SOMETHING = 'DO_SOMETHING';

export interface AppActions {
    DO_SOMETHING: {
        type: typeof DO_SOMETHING;
        value: string;
    }
}

export type AppAction = AppActions[keyof  AppActions];

export interface AppState {
    something: string;
}

export interface AppModel<S extends AppState, A extends AppAction> {
    dispatch: (action: A) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<ContextState<S>>>;
    state: ContextState<S>;
}
