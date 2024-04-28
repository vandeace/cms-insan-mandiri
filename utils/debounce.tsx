import { useEffect, useRef } from "react";

/**
 * @callback callbackFunc
 * @param {any[]} args - arguments passed into callback
 */
/**
 * Debounce function to reduce number executions
 * @param {callbackFunc} cb - callback function to be executed
 * @param {number} wait - number of milliseconds to delay function execution
 * @param {any[]} deps - dependencies array
 */
const useDebounce = (cb, wait = 500, deps = []) => {
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      cb.apply(this, args);
    }, wait);

    return () => clearTimeout(timerRef.current);
    /** used JSON.stringify(deps) instead of just deps
      * because passing an array as a dependency causes useEffect 
re-render infinitely
      * @see {@link https://github.com/facebook/react/issues/14324}
      */
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [cb, wait, JSON.stringify(deps)]);
};
