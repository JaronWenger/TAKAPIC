import React from 'react';

const VideoCard = ({ videoSrc, title, description, handleBuyClick }) => {
  return (
    <div 
      style={{ width: '300px', margin: '10px', borderRadius: '8px', overflow: 'hidden' }} 
      className="video-card"
      onClick={handleBuyClick}
    >
      <video 
        src={videoSrc} 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
            margin: '0px 0', 
            marginTop: -10,
            marginBottom: 5,
            fontSize: '1.5rem',  // Increased font size
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Added font-family
            color: 'white' 
          }}
        >
          {title}
        </h3>
        <p style={{ 
            margin: '0', 
            fontSize: '1.2rem',  // Increased font size
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Added font-family
            color: 'lightGrey' 
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
