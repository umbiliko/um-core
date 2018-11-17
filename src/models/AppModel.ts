import { Dispatch, SetStateAction } from 'react';
import { Map } from 'immutable';
import { ShellState } from './useAppModel';

export interface AppModel<S extends ShellState> {
    dispatch: <A extends Action>(action: A) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<S>>;
    state: Map<keyof S, ValueType | null>;
}
