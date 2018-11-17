import { useEffect, useState} from 'react';
import { AppModel, AppState } from './AppModel';
import { ContextState } from './ContextModel';

export const DO_SOMETHING = 'DO_SOMETHING';

export interface AppActions {
    DO_SOMETHING: {
        type: typeof DO_SOMETHING;
        value: string;
    }
}

export type AppAction = AppActions[keyof  AppActions];

export const useAppModel = <S extends AppState, A extends AppAction>(initialState: ContextState<S>): AppModel<S, A> => {

    const [state, setState] = useState<ContextState<S>>(initialState);

    const reduce = (action: AppAction): ContextState<S> => {
        switch (action.type) {
            case DO_SOMETHING: return state.set('something', action.value);
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

    const model: AppModel<S, A> = {
        dispatch,
        doSomething,
        setState,
        state
    };

    return model;
};
