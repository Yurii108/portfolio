import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
};
