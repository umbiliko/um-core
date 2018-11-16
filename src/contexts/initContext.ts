import { Context, createContext } from 'react';
import { /*fromJS,*/ Map } from 'immutable';

export interface ImmutableStateContextType<S extends FlatObject = FlatObject> {
    setState: <S, K>(key: keyof S, value: string) => void;
    state: Map<keyof S, string>;
}
/*
function setNothing<S extends any = any>(key: keyof S, value: S) {
}
*/
export function initContext<S extends FlatObject, T extends ImmutableStateContextType<S>>() {
    return createContext<Partial<T>>({
        // setState: setNothing<S>,
        // state: fromJS({}) as Map<keyof S, string>
    }) as any as Context<T>;
}
