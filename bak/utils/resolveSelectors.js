function resolveSelectors/*<S, T>*/(
    selectors/*: {[K in keyof T]: Selector<S, T[K]>}*/,
    selectorCreator/* : typeof createSelector = createSelector*/
)/*: () => {[K in keyof T]: Selector<S, T[K]>}*/ {

    // already selector
    if (typeof selectors === 'function') {
        return selectors;
    }

    // map of selectors
    if (typeof selectors === 'object' && selectors) {
        const selectorsKeys = Object.keys(selectors);
        return selectorCreator(
            selectorsKeys.map(key => resolveSelectors(selectors[key])),
            (...values) => values.reduce((composition, value, index) => {
                composition[selectorsKeys[index]] = value;
                return composition;
            }, {})
        );
    }

    // constant
    return () => selectors;
}

export default resolveSelectors;