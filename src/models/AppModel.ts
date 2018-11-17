import { Dispatch, SetStateAction } from 'react';
import { Map } from 'immutable';

export interface AppModel<S extends FlatObject, A extends Action> {
    dispatch: (action: A) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<Map<keyof S, FlatArray | ValueType | null>>>;
    state: Map<keyof S, FlatArray | ValueType | null>;
}
