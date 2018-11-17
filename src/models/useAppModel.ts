import { Map } from 'immutable';
import { useEffect, useState} from 'react';
import { AppModel } from './AppModel';

const DO_SOMETHING = 'DO_SOMETHING';

interface AppActionTypes {
    DO_SOMETHING: {
        type: typeof DO_SOMETHING;
        value: string;
    }
}

type AppActionType = AppActionTypes[keyof  AppActionTypes];

export const useAppModel = <S extends FlatObject, A extends AppActionType>(initialState: Map<keyof S, FlatArray | ValueType | null>): AppModel<S, A> => {

    const [state, setState] = useState<Map<keyof S, FlatArray | ValueType | null>>(initialState);

    const reduce = (action: AppActionType): Map<keyof S, FlatArray | ValueType | null> => {
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
