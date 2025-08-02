import React, { useEffect, useRef, useState } from "react";

function StatCounter({ label, end }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let observer;
    const animate = () => {
      let start = 0;
      const duration = 1500;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 1 }
      );
      observer.observe(ref.current);
    }
  }, [end]);

  return (
    <div className="stat" ref={ref}>
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

export default StatCounter;
