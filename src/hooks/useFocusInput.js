import { useRef, useCallback } from 'react';

export default function useFocusInput() {
  const ref = useRef();

  const focusInput = useCallback(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return [ref, focusInput];
}
