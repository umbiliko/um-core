import { KeyArray, State } from '@um/base/types';

export default (keys: KeyArray, state: State, amount?: number): State => {
    const value: number = state.getIn(keys);
    
    if (typeof value !== 'number') {
        return state;
    }

    return state.setIn(keys, value + (amount || 1));
};