import { createSelectorCreator, defaultMemoize } from 'reselect';

// create a "selector creator" that uses ===
const createSelector = createSelectorCreator(defaultMemoize);

export default createSelector;