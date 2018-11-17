import { createResource } from '../effects/createResource';
export const ScriptResource = createResource(({ src }) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = reject;
        document.body.appendChild(script);
    });
});
export const Script = ({ children, ...rest }) => {
    ScriptResource.read(rest);
    if (typeof children === 'function') {
        return children();
    }
    return children;
};
export function useScript({ src }) {
    return ScriptResource.read({ src });
}
//# sourceMappingURL=Script.js.map