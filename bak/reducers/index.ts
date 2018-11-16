import { CONCAT, CLEAR, DECREMENT, DELETE, INCREMENT, INSERT, PATCH, REMOVE, SHIFT, UNSHIFT, UPDATE } from '../actions/types';
import actions from '../types/actions';
import State from '../types/State';
import $concat from './concat';
import $clear from './clear';
import $decrement from './decrement';
import $delete from './delete';
import $increment from './increment';
import $insert from './insert';
import $patch from './patch';
import $remove from './remove';
import $shift from './shift';
import $update from './update';
import $unshift from './unshift';

export default (state: State, action: actions[keyof actions]): State => {

    const { path } = action;

    switch (action.type) {

        case CONCAT:
            return $concat(path, state, action.payload);

        case CLEAR:
            return $clear(path, state);

        case DECREMENT:
            return $decrement(path, state, action.amount);
        
        case DELETE:
            return $delete(path, state);

        case INCREMENT:
            return $increment(path, state, action.amount);

        case INSERT:
            return $insert(path, state, action.payload);

        case PATCH:
            return $patch(path, state, action.payload);

        case REMOVE:
            return $remove(path, state);
        
        case SHIFT:
            return $shift(path, state);

        case UNSHIFT:
            return $unshift(path, state);

        case UPDATE:
            return $update(path, state, action.payload);
    }

    return state;
};