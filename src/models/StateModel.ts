import { Map } from 'immutable';

export interface StateModel<S extends FlatObject = FlatObject> {
    setState: (key: keyof S, value: FlatArray | ValueType | null) => void;
    state: Map<keyof S, FlatArray | ValueType | null>;
}
