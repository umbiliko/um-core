import { createSelectorCreator, defaultMemoize } from 'reselect';
import deepEqualityCheck from './deepEqualityCheck';

// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
    defaultMemoize,
    deepEqualityCheck
);

export default createDeepEqualSelector;

/*
// use the new "selector creator" to create a selector
const mySelector = createDeepEqualSelector(
    state => state.values.filter(val => val < 5),
    values => values.reduce((acc, val) => acc + val, 0)
);
*/