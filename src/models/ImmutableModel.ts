import { Map } from 'immutable';

export interface ImmutableModel<S extends FlatObject = FlatObject> {
    setState: <S, K>(key: keyof S, value: string) => void;
    state: Map<keyof S, string>;
}
