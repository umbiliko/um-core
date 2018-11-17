import { useEffect, useState } from 'react';
import { throttle } from './throttle';
const events = new Set();
const onResize = () => events.forEach(fn => fn());
export const useWindowSize = (options = {}) => {
    const { throttleMs = 100 } = options;
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const handle = throttle(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, throttleMs);
    useEffect(() => {
        if (events.size === 0) {
            window.addEventListener('resize', onResize, true);
        }
        events.add(handle);
        return () => {
            events.delete(handle);
            if (events.size === 0) {
                window.removeEventListener('resize', onResize, true);
            }
        };
    }, []);
    return size;
};
//# sourceMappingURL=useWindowSize.js.map