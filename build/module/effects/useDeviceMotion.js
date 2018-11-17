import { useEffect, useState } from 'react';
export const useDeviceMotion = () => {
    const [motion, setMotion] = useState({
        acceleration: {
            x: null,
            y: null,
            z: null,
        },
        accelerationIncludingGravity: {
            x: null,
            y: null,
            z: null,
        },
        rotationRate: {
            alpha: null,
            beta: null,
            gamma: null,
        },
        interval: 0,
    });
    useEffect(() => {
        const handle = (deviceMotionEvent) => {
            setMotion(deviceMotionEvent);
        };
        window.addEventListener('devicemotion', handle);
        return () => {
            window.removeEventListener('devicemotion', handle);
        };
    }, []);
    return motion;
};
//# sourceMappingURL=useDeviceMotion.js.map