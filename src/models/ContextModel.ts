import { Map } from 'immutable';

export type ContextValue = FlatArray | ValueType | null;

export interface ContextState<S> extends Map<keyof S, ContextValue> {
}

export interface ContextModel<S extends {} = {}> {
    setState: (key: keyof S, value: ContextValue) => void;
    state: ContextState<S>;
}
