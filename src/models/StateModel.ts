import { Map } from 'immutable';

export interface StateModel<S extends FlatObject = FlatObject> {
    setState: (key: keyof S, value: ValueType | null) => void;
    state: Map<keyof S, ValueType | null>;
}
