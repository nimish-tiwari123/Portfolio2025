import React, { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./style.css";
import { starDesign } from "../../../assets/icons";

const InfiniteMarquee = ({
  items = [],
  speed = 45,
  gap = 48,
  pauseOnHover = true,
  direction = "left",
}) => {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [repeatedItems, setRepeatedItems] = useState([]);

  useEffect(() => {
    if (!items || items.length === 0) {
      setRepeatedItems([]);
      return;
    }

    const calculateRepeats = () => {
      const containerW = containerRef.current?.offsetWidth || 0;
      const singleW = measureRef.current?.scrollWidth || 0;

      if (!containerW || !singleW) {
        setRepeatedItems(Array(6).fill(items).flat());
        return;
      }

      const repeats = Math.max(2, Math.ceil((containerW * 2) / singleW));
      const arr = Array.from({ length: repeats }, () => items).flat();
      setRepeatedItems(arr);
    };

    const t = setTimeout(calculateRepeats, 50);
    window.addEventListener("resize", calculateRepeats);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", calculateRepeats);
    };
  }, [items]);

  if (!items || items.length === 0) return null;

 const renderItem = (text, idx) => {
  if (text.includes("/")) {
    const [highlightPart, normalPart] = text.split("/");

    return (
      <div
        className="inf-marquee-item d-flex align-items-center gap-3"
        key={idx}
        style={{ marginRight: `${gap}px` }}
      >
        <img src={starDesign} alt="star" className="inf-marquee-bullet" />
        <span className="inf-marquee-text fs-4">
          <span className="custom-primary">{highlightPart?.trim()} /</span>{" "}
          <span className="text-white">{normalPart?.trim()}</span>
        </span>
      </div>
    );
  }

  // fallback: whole text is white
  return (
    <div
      className="inf-marquee-item d-flex align-items-center gap-3"
      key={idx}
      style={{ marginRight: `${gap}px` }}
    >
      <img src={starDesign} alt="star" className="inf-marquee-bullet" />
      <span className="inf-marquee-text fs-4 text-white">{text}</span>
    </div>
  );
};


  return (
    <div className="inf-marquee-wrapper py-4" ref={containerRef}>
      <div className="inf-marquee-measure" ref={measureRef} aria-hidden>
        {items.map((t, i) => renderItem(t, `m-${i}`))}
      </div>

      <Marquee gradient={false} speed={speed} pauseOnHover={pauseOnHover} direction={direction}>
        <div className="inf-marquee-track">
          {repeatedItems.map((t, i) => renderItem(t, i))}
        </div>
      </Marquee>
    </div>
  );
};

export default InfiniteMarquee;
