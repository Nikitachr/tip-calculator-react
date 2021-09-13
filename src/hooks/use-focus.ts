import { RefObject, useEffect, useState } from "react";

export const useFocus = (ref: RefObject<HTMLInputElement> | null) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    if (ref?.current) {
      ref.current.addEventListener("focus", onFocus);
      ref.current.addEventListener("blur", onBlur);
    }

    return () => {
      if (ref?.current) {
        ref.current.removeEventListener("focus", onFocus);
        ref.current.removeEventListener("blur", onBlur);
      }
    };
  }, []);

  return state;
};
