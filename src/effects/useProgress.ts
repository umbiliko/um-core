import { useEffect, useState } from 'react';

export const useProgress = (animate: boolean, duration: number) => {
    const [progress, setProgress] = useState(0);

    useEffect(
        (): (() => void) | void => {
            if (animate) {
                let rafId: number;
                let start: number;
                const step = (timestamp: number) => {
                    if (!start) {
                        start = timestamp;
                        const progress = timestamp - start;
                        setProgress(progress);
                        if (progress < duration) {
                            rafId = requestAnimationFrame(step);
                        }
                    }
                };
                rafId = requestAnimationFrame(step);
                return () => cancelAnimationFrame(rafId);
            }
        },
        [animate, duration]
    );

    return progress;
};
