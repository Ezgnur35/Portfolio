"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";

const MouseEnterContext = createContext([false, () => {}]);

export function CardContainer({ children, className = "", containerClassName = "" }) {
  const ref = useRef(null);
  const raf = useRef(null);
  const cur = useRef({ rx: 0, ry: 0 });
  const tgt = useRef({ rx: 0, ry: 0 });
  const hov = useRef(false);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [style, setStyle] = useState({});

  const animate = useCallback(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    cur.current.rx = lerp(cur.current.rx, tgt.current.rx, 0.1);
    cur.current.ry = lerp(cur.current.ry, tgt.current.ry, 0.1);
    setStyle({
      transform: `perspective(1000px) rotateX(${cur.current.rx}deg) rotateY(${cur.current.ry}deg)`,
    });
    const moving =
      Math.abs(cur.current.rx - tgt.current.rx) > 0.01 ||
      Math.abs(cur.current.ry - tgt.current.ry) > 0.01;
    if (hov.current || moving) raf.current = requestAnimationFrame(animate);
  }, []);

  function onMove(e) {
    if (!ref.current) return;
    hov.current = true;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    tgt.current = { rx: (0.5 - y) * 16, ry: (x - 0.5) * 16 };
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(animate);
  }

  function onLeave() {
    hov.current = false;
    setIsMouseEntered(false);
    tgt.current = { rx: 0, ry: 0 };
    raf.current = requestAnimationFrame(animate);
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        style={{ perspective: "1000px" }}
        className={containerClassName}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={() => setIsMouseEntered(true)}
      >
        <div
          ref={ref}
          style={{ transformStyle: "preserve-3d", ...style }}
          className={className}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className = "" }) {
  return (
    <div
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export function CardItem({
  as: Tag = "div",
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) {
  const [isMouseEntered] = useContext(MouseEnterContext);
  const transform = isMouseEntered
    ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    : "translateX(0) translateY(0) translateZ(0)";

  return (
    <Tag
      className={className}
      style={{
        transform,
        transition: "transform 0.3s ease",
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}