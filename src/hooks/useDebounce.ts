import { useCallback, useRef } from "react";

/**
 * A custom hook that debounces a function call.
 *
 * @param func - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns A debounced version of the provided function.
 */
export const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );
};
