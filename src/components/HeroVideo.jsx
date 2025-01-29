import React, { useState, useRef } from 'react';
import hero from '../assets/Add.mp4';
import thumbnail from '../assets/example.png';

const HeroVideo = ({ handleBuyClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      videoRef.current.play(); // Start video playback
    }

    // Request fullscreen if the video is clicked
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { // Safari
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="hero-card">
      <video
        ref={videoRef}
        src={hero}
        loop
        playsInline
        className="hero-video"
        poster={thumbnail}
        onClick={handleVideoClick}
      />
      <button className="upload-button3" onClick={handleBuyClick}>
        Upload Photos {'\u279C'}
      </button>
    </div>
  );
};

export default HeroVideo;
