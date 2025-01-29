import React, { useState, useEffect } from 'react'
import videoBg from '../assets/Welcome.mp4'
import videoBgMobile from '../assets/Welcomephone.mp4'
import scifiexample from '../assets/scifi.mp4'
import adventrueexample from '../assets/adventure.mp4'
import westernexample from '../assets/western.mp4'
import fantasyexample from '../assets/fantasy.mp4'
import HeroVideo from './HeroVideo';
import logoT from '../assets/LogoT.png'
import template from '../assets/template.png'

import { ReactComponent as Scifi } from '../assets/scifi.svg';
import { ReactComponent as Western } from '../assets/western.svg';
import { ReactComponent as Fantasy } from '../assets/fantasy.svg';
import { ReactComponent as Horror } from '../assets/horror.svg';
import { ReactComponent as Adventure } from '../assets/adventure.svg';
import { ReactComponent as Romcom } from '../assets/romcom.svg';
import VideoCard from './VideoCard'
import MainCard from './MainCard'
import SocialIcons from './SocialIcons'

const genres = [
  { Icon: Scifi, alt: 'Scifi Icon' },
  { Icon: Western, alt: 'Western Icon' },
  { Icon: Fantasy, alt: 'Fantasy Icon' },
  { Icon: Horror, alt: 'Horror Icon' },
  { Icon: Adventure, alt: 'Adventure Icon' },
  { Icon: Romcom, alt: 'Romcom Icon' },
];
const videoCards = [
  {
    videoSrc: scifiexample,
    title: '🛸 Sci-Fi',
    description: 'Creates captivating sci-fi visuals, blending futuristic designs with imaginative, otherworldly elements.',
  },
  {
    videoSrc: adventrueexample,
    title: '🗺️ Adventure',
    description: 'Immerse yourself in an adventurous world, where daring quests unfold against stunning landscapes.',
  },
  {
    videoSrc: westernexample,
    title: '🏜️ Western',
    description: 'Step into the wild West, where rugged landscapes meet epic showdowns and tales of honor and justice unfold.',
  },
  {
    videoSrc: fantasyexample,
    title: '🐉 Fantasy',
    description: 'Embark on a magical journey through enchanted realms, where mythical creatures and legendary heroes shape the fate of worlds.',
  }
];



const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on initial load
    if (window.innerWidth <= 768) {  // You can adjust this breakpoint as needed
      setIsMobile(true);
    }

    // Optional: Add event listener to check on window resizefds
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
  const handleScroll = () => {
    // Scrolls to the element with the ID 'gallery-section'
    const section = document.getElementById('gallery-section');
    if (section) {
      const offset = 100; // Adjust this value to scroll a little above the section
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };
  




  return (
    <div className='main'>
      <div className='overlay'></div>

        <img src={logoT} alt="Takapic Logo" className="spinning-logo" />        

        <span className="brand-text">TAKAPIC</span>
        <button className="logo-button" onClick={handleScrollToTop}>B a c k  t o  T o p</button>

      <div className='righ-header'>
      <button className="upload-button" onClick={handleBuyClick}>Upload Photos</button>
      <button className="gallery-button" onClick={handleScroll}>Gallery</button>
      <button className="pricing-button" onClick={handleBuyClick}>Pricing</button>
 
      </div>
      
      {/* Render appropriate video based on screen size */}


      <div className="video-container">
        <video
          src={isMobile ? videoBgMobile : videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="wave-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#000000"
              fillOpacity="1"
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>


        
      </div>

      <div className="fade-overlay"></div>
      <div className="takapic">
      <h1 className="title-text">
        <span className="big-line">Star in movie scenes using AI</span>

        <div className="small-break"></div>
        Effortlessly create cinematic masterpieces from your photos, all without the need for expensive special effects teams or Hollywood studios

        <div className="small-break"></div>
        🤳 <span className="button-link" onClick={handleBuyClick}><strong>Upload selfies</strong></span> for AI magic
        <br />

        <div className="small-break"></div>
        🎬 <span className="button-link" onClick={handleBuyClick}><strong>Choose a genre</strong></span> Sci-Fi, Fantasy, and more
        <br />

        <div className="small-break"></div>
        ⚡️ <span className="button-link" onClick={handleBuyClick}><strong>Get your own Flux AI clone</strong></span> to bring your photos to life
        <br />

        <div className="small-break"></div>
        🎥 <span className="button-link" onClick={handleBuyClick}><strong>Generate epic movie scenes</strong></span> with one click
        <br />

        <div className="small-break"></div>
        💫 <span className="button-link" onClick={handleBuyClick}><strong>Share your clips</strong></span> – be the star of your own film
      </h1>


      </div>

      <div>
        <HeroVideo handleBuyClick={handleBuyClick} />
      </div>





      <div className="genres">
      {/* Vertical Line */}
      <div className="lineb" />
      {/* Loop through each genre and display */}
      {genres.map((genre, index) => (
        <React.Fragment key={index}>
          <genre.Icon alt={genre.alt} className="genre-icon" />
          {/* Vertical Line between each genre */}
          {index < genres.length - 1 && <div className="line" />}
        </React.Fragment>
      ))}
      {/* Vertical Line */}
      <div className="lineb" />
      </div>



      {/* Call to Action */}
      <div className="cta-section">

        <p>Upload your selfies and become a movie star now!</p>

      <img src={template} alt="Template" className="template-image" />
      <button className="upload-button-main" onClick={handleBuyClick}>Upload Photos {"\u279C"}</button>
      <div className="bottom-spacing"></div>  {/* Add this div */}
      </div>
      
      <div id="gallery-section" className="card-section">
      <p>Choose a genre and bring your vision to life</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px', margin: 0 }}>
        {videoCards.map((card, index) => (
          <VideoCard
            key={index}
            videoSrc={card.videoSrc}
            title={card.title}
            description={card.description}
            handleBuyClick={handleBuyClick} 
          />
        ))}
      </div>



        <MainCard handleBuyClick={handleBuyClick} />


        <div className="App">
          <SocialIcons />
        </div>
 

    </div>
  )
}

export default Main;
