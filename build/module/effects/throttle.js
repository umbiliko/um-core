export function throttle(func, threshhold = 250, scope) {
    let last, deferTimer;
    return function () {
        let context = scope || this;
        let now = Date.now(), args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = window.setTimeout(function () {
                last = now;
                func.apply(context, args);
            }, threshhold);
        }
        else {
            last = now;
            func.apply(context, args);
        }
    };
}
//# sourceMappingURL=throttle.js.map