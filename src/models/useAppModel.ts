import { useEffect, useState} from 'react';
import { DO_ANOTHER, DO_SOMETHING } from './AppModel';
import { AppAction, AppModel, AppState } from './AppModel';
import { ContextState } from './ContextModel';

export const useAppModel = (initialState: ContextState<AppState>): AppModel => {

    const [state, setState] = useState<ContextState<AppState>>(initialState);

    const reduce = (action: AppAction): ContextState<AppState> => {
        switch (action.type) {
            case DO_SOMETHING: return state.set('something', action.value);
            case DO_ANOTHER: return state.set('another', action.amount);
        }
        return state;
    };

    const dispatch = (action: AppAction): void => { setState(reduce(action)) };

    const doSomething = () => dispatch({ type: DO_SOMETHING, value: 'hello' } );

    useEffect(
        () => {
        },
        []
    );

    const model: AppModel = {
        dispatch,
        doSomething,
        setState,
        state
    };

    return model;
};
