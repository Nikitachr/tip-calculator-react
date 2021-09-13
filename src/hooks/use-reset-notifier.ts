import { useContext, useEffect } from "react";
import { ResetContext } from "../components/calculator";

export const useResetNotifier = (handler: () => void) => {
  const notifier$ = useContext(ResetContext);

  useEffect(() => {
    const sub = notifier$.subscribe((res) => handler());
    return () => {
      sub.unsubscribe();
    };
  }, []);
};
