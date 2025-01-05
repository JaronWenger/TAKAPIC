import React, { useState, useEffect } from 'react'
import videoBg from '../assets/Welcome.mp4'
import videoBgMobile from '../assets/Welcomephone.mp4'




const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on initial load
    if (window.innerWidth <= 768) {  // You can adjust this breakpoint as needed
      setIsMobile(true);
    }

    // Optional: Add event listener to check on window resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBuyClick = () => {
    // Redirect to Stripe checkout page
    window.location.href = 'https://buy.stripe.com/6oEdSr4Os5kq9Zm3cc';
  }
  

  return (
    <div className='main'>
      <div className='overlay'></div>
      {/* Render appropriate video based on screen size */}
      <video
        src={isMobile ? videoBgMobile : videoBg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='takapic'>
        <h1>T A K A P I C</h1>
      </div>



      {/* Call to Action */}
      <div className="cta-section">
        <p>Get your movie-themed AI video now for just $20!</p>
        <button className="cta-button" onClick={handleBuyClick}>Buy Now</button>
      </div>

    </div>
  )
}

export default Main;
