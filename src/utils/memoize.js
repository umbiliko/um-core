function defaultEqualityCheck(a, b) {
    return a === b;
}

function memoize/*<F extends Function>*/(
    func/*: F*/,
    equalityCheck /* ?: <T>(a: T, b: T, index: number) => boolean */ = defaultEqualityCheck) /*: F*/{

    let lastArgs = null;
    let lastResult = null;

    return (...args) => {
        if (
            lastArgs !== null &&
            lastArgs.length === args.length &&
            args.every((value, index) => equalityCheck(value, lastArgs[index]))
        ) {
            return lastResult;
        }

        lastResult = func(...args);
        lastArgs = args;

        return lastResult;
    };
}

export default memoize;