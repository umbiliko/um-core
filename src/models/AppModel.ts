import { Dispatch, SetStateAction } from 'react';
import { ContextState } from './ContextModel';

export interface AppModel<S, A extends Action> {
    dispatch: (action: A) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<ContextState<S>>>;
    state: ContextState<S>;
}
