import { useState, useEffect } from 'react'

export const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        let observerRefValue = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                    observer.unobserve(element.current);
                }
            }, { rootMargin }
        );

        if (element.current) {
            observer.observe(element.current);
            observerRefValue = element.current;
        }   
        return () => { if (observerRefValue) observer.unobserve(element.current); }
    }, [element]);

    return isVisible;
};