import { Map } from 'immutable';

export interface ImmutableModel<S extends FlatObject = FlatObject> {
    setState: (key: keyof S, value: ValueType | null) => void;
    state: Map<keyof S, string>;
}
