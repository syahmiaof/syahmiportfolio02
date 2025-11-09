import React, { useState, useEffect, useRef } from 'react';

interface ScrollAnimationOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options?: ScrollAnimationOptions) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // We only care about when it's intersecting
      if (entry.isIntersecting) {
        setIsVisible(true);
        // If triggerOnce is true, we unobserve the element after it has been visible
        if (options?.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, {
      threshold: 0.1, // Default threshold
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};
