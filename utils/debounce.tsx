import { useEffect, useRef, DependencyList } from "react";

type CallbackFunction = (...args: any[]) => void;

/**
 * Debounce function to reduce number of executions
 * @param cb - callback function to be executed
 * @param wait - number of milliseconds to delay function execution
 * @param deps - dependencies array
 */
const useDebounce = (
  cb: CallbackFunction,
  wait: number = 500,
  deps: DependencyList = [],
): void => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      cb();
    }, wait);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cb, wait, JSON.stringify(deps)]);
};

export default useDebounce;
