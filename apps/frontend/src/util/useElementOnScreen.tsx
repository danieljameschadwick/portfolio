import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useElementOnScreen: (
  defaultVisible: boolean
) => [MutableRefObject<HTMLDivElement>, boolean] = (
  defaultVisible: boolean
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(defaultVisible);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return [containerRef, isVisible];
};
