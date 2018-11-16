import { Context, createContext } from 'react';
import { ImmutableModel } from '../models/ImmutableModel';

/*
function setNothing<S extends any = any>(key: keyof S, value: S) {
}
*/
export function initContext<S extends FlatObject, T extends ImmutableModel<S>>(initialState: S) {
    return createContext<Partial<T>>({
        // setState: setNothing<S>,
        // state: fromJS({}) as Map<keyof S, string>
        ...initialState
    }) as any as Context<T>;
}
