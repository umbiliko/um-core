import { Dispatch, SetStateAction } from 'react';

interface Action {
    type: string;
}

export const useDispatch = <S>(
    reducer: (state: S, action: Action) => S,
    state: S,
    setState: Dispatch<SetStateAction<S>>,
) => (action: Action) => setState(reducer(state, action));
