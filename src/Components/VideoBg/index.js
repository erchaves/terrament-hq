import React from "react";
import './index.scss';

const VideoBg = ({
  wrapperClass,
  videoClass,
  loop = true,
  muted = true,
  autoPlay = true,
  poster,
  children,
  el: El = "div"
}) => (
  <El
    className={`component-video-bg ${wrapperClass ? wrapperClass : ""}`}
  >
    <img className="video-fallback-img" style={{display: "none"}} src={poster} alt="terrament style image of renewable energy" />
    <video
      className={`video-html5 ${videoClass ? videoClass : ""}`}
      loop={loop}
      muted={muted}
      poster={poster}
      autoPlay={autoPlay}
    >
      {children}
    </video>
  </El>
);

export default VideoBg;
