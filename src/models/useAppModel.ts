import { useEffect, useState} from 'react';
import { AppModel } from './AppModel';
import { ContextState } from './ContextModel';

export const DO_SOMETHING = 'DO_SOMETHING';

export interface AppActionTypes {
    DO_SOMETHING: {
        type: typeof DO_SOMETHING;
        value: string;
    }
}

export interface AppState {
    something: string;
}

export type AppActionType = AppActionTypes[keyof  AppActionTypes];

export const useAppModel = <S extends AppState, A extends AppActionType>(initialState: ContextState<S>): AppModel<S, A> => {

    const [state, setState] = useState<ContextState<S>>(initialState);

    const reduce = (action: AppActionType): ContextState<S> => {
        switch (action.type) {
            case DO_SOMETHING: return state.set('something', action.value);
        }
        return state;
    };

    const dispatch = (action: AppActionType): void => { setState(reduce(action)) };

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
