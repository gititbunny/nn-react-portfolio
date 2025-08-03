import React, { useEffect, useRef, useState } from "react";

function StatCounter({ label, end }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let observer;
    let timer;
    const target = ref.current;

    const animate = () => {
      let start = 0;
      const duration = 1400;
      const stepTime = Math.abs(Math.floor(duration / end));
      clearInterval(timer);

      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    };

    if (target) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate();
          } else {
            setCount(0);
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(target);
    }

    return () => {
      if (observer && target) {
        observer.unobserve(target);
      }
      clearInterval(timer);
    };
  }, [end]);

  return (
    <div className="stat" ref={ref}>
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

export default StatCounter;
