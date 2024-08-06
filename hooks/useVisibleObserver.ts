import { useEffect, useRef } from 'react';

type useVisibleObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useVisibleObserver = (
  callback: (isVisible: boolean) => void,
  options: useVisibleObserverOptions = {},
  chatContext: any,
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    }, options);

    observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef, options]);

  useEffect(() => {
    setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [chatContext]);

  return targetRef;
};

export default useVisibleObserver;
