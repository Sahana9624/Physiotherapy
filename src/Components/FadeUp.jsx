import { useEffect, useRef, useState } from "react";

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  duration,
  direction = "up",
  as: Component = "div",
  style = {},
  threshold = 0.05,
  rootMargin = "0px 0px -30px 0px",
  ...props
}) {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isDoneRef = useRef(false);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      isDoneRef.current = true;
      node.classList.add("fade-up-visible", "fade-up-done");
      return;
    }

    let timer = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);

            // Once the reveal animation completes, reset transition-delay so hover effects are instant
            timer = setTimeout(() => {
              isDoneRef.current = true;
              if (node) {
                node.style.setProperty("--fade-delay", "0s");
                node.style.transitionDelay = "0s";
                node.classList.add("fade-up-done");
              }
            }, (delay || 0) + 800);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      if (timer) clearTimeout(timer);
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay]);

  const customStyle = {
    ...style,
    ...(delay ? { "--fade-delay": `${delay}ms`, transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { "--fade-duration": `${duration}ms`, transitionDuration: `${duration}ms` } : {}),
    ...(isDoneRef.current ? { "--fade-delay": "0s", transitionDelay: "0s" } : {}),
  };

  const directionClass =
    direction && direction !== "up" ? `fade-direction-${direction}` : "";

  const visibleClass = isVisible ? "fade-up-visible" : "";
  const doneClass = isDoneRef.current ? "fade-up-done" : "";

  return (
    <Component
      ref={domRef}
      className={`fade-up-box ${directionClass} ${visibleClass} ${doneClass} ${className}`.trim()}
      style={customStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
