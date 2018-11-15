declare const _default: <T>(method: (...args: any[]) => Promise<T>) => {
    read: (key: string, ...args: any[]) => any;
};
export default _default;
