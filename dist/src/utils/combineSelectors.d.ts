import { Selector } from 'reselect';
import createSelector from './createSelector';
declare function combineSelectors<S, T>(selectors: {
    [K in keyof T]: Selector<S, T[K]>;
}, selectorCreator?: typeof createSelector): Selector<S, T>;
export default combineSelectors;
