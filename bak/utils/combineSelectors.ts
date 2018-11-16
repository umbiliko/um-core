import { createStructuredSelector, Selector } from 'reselect';
import createSelector from './createSelector';

function combineSelectors<S, T>(
    selectors: {[K in keyof T]: Selector<S, T[K]>},
    selectorCreator: typeof createSelector = createSelector,
): Selector<S, T> {
    return createStructuredSelector(selectors, selectorCreator);
}

export default combineSelectors;