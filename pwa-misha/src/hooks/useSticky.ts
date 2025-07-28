import { useState, useEffect } from "react";
import type { RefObject } from "react";

/**
 * Hook to detect if a referenced element has been scrolled past the top of the viewport.
 * @param ref - React ref of the element to observe.
 * @returns boolean indicating if the element is sticky (scrolled past).
 */

export function useSticky(ref: RefObject<HTMLElement>): boolean {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      setSticky(top <= 0);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isSticky;
}
