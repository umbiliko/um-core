import { useEffect, useState } from 'react';
export const useProgress = (animate, duration) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if (animate) {
            let rafId;
            let start;
            const step = (timestamp) => {
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
    }, [animate, duration]);
    return progress;
};
//# sourceMappingURL=useProgress.js.map