import { Context, createContext } from 'react';
import { StateModel } from '../models/ImmutableModel';

/*
function setNothing<S extends any = any>(key: keyof S, value: S) {
}
*/
export function initContext<S extends FlatObject, T extends StateModel<S>>(initialState: S) {
    return createContext<Partial<T>>({
        // setState: setNothing<S>,
        // state: fromJS({}) as Map<keyof S, string>
        ...initialState
    }) as any as Context<T>;
}
