import React from "react";
import './index.scss';

const VideoYoutube = ({
  isBackgroundVideo,
  wrapperClass,
  videoClass,
  loop=true,
  muted=true,
  autoPlay=true,
  controls,
  poster,
  source='',
  children,
  el: El = "div"
}) => {
  return (
  <El
    className={`component-video-youtube`}
  >
    <img className="video-fallback-img" style={{display: "none"}} src={poster} alt="terrament style image of renewable energy" />
    <iframe
      className={`video-html5 ${videoClass ? videoClass : ""}`}
      src={source} title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      modestbranding
      controls="0"
      loop="1"
    >
    </iframe>
  </El>
)};

export default VideoYoutube;
