import { Map } from 'immutable';
const RESET = 'RESET';
const SET = 'SET';
const SET_IN = 'SET_IN';
const UPDATE = 'UPDATE';
const UPDATE_IN = 'UPDATE_IN';
export const actions = {
    reset: (next) => ({ next, type: RESET }),
    set: (key, value) => ({ key, type: SET, value }),
    setIn: (keyPath, value) => ({ keyPath, type: SET_IN, value }),
    update: (key, value) => ({ key, type: UPDATE, value }),
    updateIn: (keyPath, value) => ({ keyPath, type: UPDATE_IN, value }),
};
export default (state, action) => {
    if (!Map.isMap(state)) {
        return state;
    }
    switch (action.type) {
        case RESET: return action.next;
        case SET: return state.set(action.key, action.value);
        case SET_IN: return state.setIn(action.keyPath, action.value);
        case UPDATE: return state.update(action.key, action.value);
        case UPDATE_IN: return state.updateIn(action.keyPath, action.value);
        default: return state;
    }
};
//# sourceMappingURL=stateReducer.js.map