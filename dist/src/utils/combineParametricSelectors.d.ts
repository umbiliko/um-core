import { ParametricSelector } from 'reselect';
import createSelector from './createSelector';
declare function combineParametricSelectors<S, P, T>(selectors: {
    [K in keyof T]: ParametricSelector<S, P, T[K]>;
}, selectorCreator?: typeof createSelector): ParametricSelector<S, P, T>;
export default combineParametricSelectors;
