import { createStructuredSelector, ParametricSelector } from 'reselect';
import createSelector from './createSelector';

function combineParametricSelectors<S, P, T>(
    selectors: {[K in keyof T]: ParametricSelector<S, P, T[K]>},
    selectorCreator: typeof createSelector = createSelector
): ParametricSelector<S, P, T> {
    return createStructuredSelector(selectors, selectorCreator);
}

export default combineParametricSelectors;