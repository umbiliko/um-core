import * as Immutable from 'immutable';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

const initialState = Immutable.Map();
const rootReducer = combineReducers({});
const store = createStore(rootReducer, initialState);

export default store;
