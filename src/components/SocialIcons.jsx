import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.facebook.com/profile.php?id=61572219333367" target="_blank" rel="noopener noreferrer">
        <button className="social-button">
          <FaFacebook /> {/* Facebook icon */}
        </button>
      </a>
      <a href="https://www.youtube.com/@TakapicAI" target="_blank" rel="noopener noreferrer">
        <button className="social-button">
          <FaYoutube /> {/* YouTube icon */}
        </button>
      </a>
      <a href="https://www.instagram.com/takapic.ai/" target="_blank" rel="noopener noreferrer">
        <button className="social-button">
          <FaInstagram /> {/* Instagram icon */}
        </button>
      </a>
    </div>
  );
};

export default SocialIcons;
