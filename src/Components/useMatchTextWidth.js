import { useLayoutEffect } from "react";

const textWidth = (el) => {
  const range = document.createRange();
  range.selectNodeContents(el);
  return range.getBoundingClientRect().width;
};

// Sets the letter-spacing of each target so its text spans exactly the
// same width as the reference element's text (e.g. affiliation under college name).
export default function useMatchTextWidth(referenceRef, targetRefs) {
  useLayoutEffect(() => {
    const fit = () => {
      const reference = referenceRef.current;
      if (!reference) return;

      // Ignore the reference's trailing letter-spacing after its last character
      const trailing = parseFloat(getComputedStyle(reference).letterSpacing) || 0;
      const goal = textWidth(reference) - trailing;

      targetRefs.forEach(({ current: el }) => {
        if (!el || !el.offsetParent) return; // hidden (display: none)
        const chars = el.textContent.trim().length;
        if (chars < 2) return;
        el.style.letterSpacing = "0px";
        const base = textWidth(el);
        el.style.letterSpacing = `${(goal - base) / (chars - 1)}px`;
      });
    };

    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
}
