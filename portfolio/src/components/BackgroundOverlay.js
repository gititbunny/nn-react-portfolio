import React from "react";
import "../styles/BackgroundOverlay.css";

function BackgroundOverlay() {
  return (
    <div className="background-overlay">
      {/* Layer 1: Fullscreen video */}
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/media/background-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Layer 2: Gradient overlay */}
      <div className="gradient-overlay"></div>

      {/* Layer 3: Floating rings */}
      <div className="floating-ring ring1"></div>
      <div className="floating-ring ring2"></div>
      <div className="floating-ring ring3"></div>
    </div>
  );
}

export default BackgroundOverlay;
