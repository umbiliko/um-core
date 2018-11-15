// import { createCache, createResource/*, SimpleCache*/ } from 'simple-cache-provider';

export default <T>(method: ((...args: any[]) => Promise<T>)) => {
    let resolved = new Map();

    // const cache = createCache();
    // const resource = createResource(method);

    return {
        read: (key: string, ...args: any[]) =>
        {
            if (!resolved.has(key)) {
                throw method(...args).then((val: T) => resolved.set(key, val));
            }
            return resolved.get(key);
        }
    };
};
