import { useEffect, useState } from 'react';
import { DO_ANOTHER, DO_SOMETHING } from './AppModel';
export const useAppModel = (initialState) => {
    const [state, setState] = useState(initialState);
    const reduce = (action) => {
        switch (action.type) {
            case DO_SOMETHING: return state.set('something', action.value);
            case DO_ANOTHER: return state.set('another', action.amount);
        }
        return state;
    };
    const dispatch = (action) => { setState(reduce(action)); };
    const doSomething = () => dispatch({ type: DO_SOMETHING, value: 'hello' });
    useEffect(() => {
    }, []);
    const model = {
        dispatch,
        doSomething,
        setState,
        state
    };
    return model;
};
//# sourceMappingURL=useAppModel.js.map