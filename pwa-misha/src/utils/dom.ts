/**
 * Returns true if the element has scrolled past the top of viewport.
 * @param element - DOM element to check.
 */
export function isElementScrolledPastTop(element: HTMLElement | null): boolean {
  if (!element) return false;
  return element.getBoundingClientRect().top <= 0;
}
