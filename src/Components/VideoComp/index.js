import React from "react";
import './index.scss';

const VideoComp = ({
  isBackgroundVideo,
  wrapperClass,
  videoClass,
  loop=true,
  muted=true,
  autoPlay=true,
  controls,
  poster,
  children,
  el: El = "div"
}) => (
  <El
    className={`
      component-video
      ${wrapperClass ? wrapperClass : ""}
      ${isBackgroundVideo ? "component-video-bg" : "component-video-block"}
    `}
  >
    <img className="video-fallback-img" style={{display: "none"}} src={poster} alt="terrament style image of renewable energy" />
    <video
      onclick="this.paused ? this.play() : this.pause()"
      className={`video-html5 ${videoClass ? videoClass : ""}`}
      loop={loop}
      muted={muted}
      poster={poster}
      autoPlay={autoPlay}
      controls={controls || !isBackgroundVideo}
    >
      {children}
    </video>
  </El>
);

export default VideoComp;
