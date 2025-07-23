import React from "react";
import "../styles/BackgroundOverlay.css";

function BackgroundOverlay() {
  return (
    <div className="background-overlay">
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

      <div className="gradient-overlay"></div>

      <div className="floating-ring ring1"></div>
      <div className="floating-ring ring2"></div>
      <div className="floating-ring ring3"></div>
      <div className="floating-ring ring4"></div>
    </div>
  );
}

export default BackgroundOverlay;
