import { CLEAR, MERGE_IN, SET_IN, UPDATE_IN } from 'src/actions/types';
import { State } from 'src/typings';
import actions from 'src/typings/actions';
import $clear from './clear';
import arithmetic from './arithmetic';
import geometric from './arithmetic';

export default (state: State, action: actions[keyof actions]): State => {

    const { path } = action;

    switch (action.type) {
        case CLEAR:
            return $clear(path, state);

        case MERGE_IN:
            return state.mergeIn(path, action.payload);

        case SET_IN:
            return state.setIn(path, action.payload);

        case UPDATE_IN:
            return state.updateIn(path, action.payload);

        default:
            state = arithmetic(state, action as any);
            state = geometric(state, action as any);
            break;
    }

    return state;
};