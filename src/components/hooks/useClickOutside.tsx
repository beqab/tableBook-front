import { useEffect, useRef } from "react";

export const useClickOutside = <T extends Element>(cb: () => void) => {
  const ref = useRef<null | T>(null);
  useEffect(() => {
    const onClickOutside = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        cb();
      }
    };
    document.addEventListener("click", onClickOutside, true);

    return () => document.removeEventListener("click", onClickOutside, true);
  }, []);

  return ref;
};
