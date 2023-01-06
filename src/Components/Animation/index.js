import React from 'react'
import VideoComp from "../VideoComp";
import './index.scss';

const videoMp4 = 'terrament-product-demo-video-compressed.mp4';
const videoPosterDesign = 'terrament-prototype-R7-cover.png';

export default () => (
  <div className="page page-animation">
    <div className="wrap">
      <h1 className="h1">Terrament Concept Animation</h1>
      <br/>
      <div className="media-wrap">
        <VideoComp
          wrapperClass="captioned-media"
          poster={videoPosterDesign}
        >
          <source src={videoMp4} type="video/mp4" />
        </VideoComp>
        <span className="caption">
          3D animation of Terrament alpha design concept (early draft).
        </span>
      </div>
      <h2 className="h2"><a href="/">Back to home</a></h2>
    </div>
  </div>
)
