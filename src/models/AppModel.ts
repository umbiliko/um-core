import { Dispatch, SetStateAction } from 'react';
import { ContextState } from './ContextModel';

export interface AppState {
    something: string;
}

export interface AppModel<S extends AppState, A extends Action> {
    dispatch: (action: A) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<ContextState<S>>>;
    state: ContextState<S>;
}
