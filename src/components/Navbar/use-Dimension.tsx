import { useEffect, useRef } from "react";


interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = <T extends HTMLElement>(
  ref: React.RefObject<T>
): Dimensions => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
      console.log("ref.current.offsetHeight", ref.current.offsetHeight);
    }
  }, [ref]);

  return dimensions.current;
};
