import { Map } from 'immutable';

const RESET = 'RESET';
const SET = 'SET';
const SET_IN = 'SET_IN';
const UPDATE = 'UPDATE';
const UPDATE_IN = 'UPDATE_IN';

export type ImmutableState = Map<string, any>; // | List<any>;

export interface ImmutableAction {
    RESET: {
        next: ImmutableState;
        type: typeof RESET;
    },
    SET: {
        key: string;
        type: typeof SET;
        value: any;
    },
    SET_IN: {
        keyPath: KeyPath;
        type: typeof SET_IN;
        value: any;
    },
    UPDATE: {
        key: string;
        type: typeof UPDATE;
        value: any;
    },
    UPDATE_IN: {
        keyPath: KeyPath;
        type: typeof UPDATE_IN;
        value: any;
    }
}

export const actions = {
    reset: (next: ImmutableState): ImmutableAction[typeof RESET] => ({ next, type: RESET }),
    set: (key: string, value: any): ImmutableAction[typeof SET] => ({ key, type: SET, value }),
    setIn: (keyPath: KeyPath, value: any): ImmutableAction[typeof SET_IN] => ({ keyPath, type: SET_IN, value }),
    update: (key: string, value: any): ImmutableAction[typeof UPDATE] => ({ key, type: UPDATE, value }),
    updateIn: (keyPath: KeyPath, value: any): ImmutableAction[typeof UPDATE_IN] => ({ keyPath, type: UPDATE_IN, value }),
};

export default (state: ImmutableState, action: ImmutableAction[keyof ImmutableAction]): ImmutableState => {
    if (!Map.isMap(state)) {
        return state;
    }

    switch (action.type)
    {
        case RESET: return action.next;
        case SET: return state.set(action.key, action.value);
        case SET_IN: return state.setIn(action.keyPath, action.value);
        case UPDATE: return state.update(action.key, action.value);
        case UPDATE_IN: return state.updateIn(action.keyPath, action.value);

        default: return state;
    }
};
