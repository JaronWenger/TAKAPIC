import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logoT from '../assets/LogoT.png'

function ThankYouPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBuyClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="thankyou-page">
      <img src={logoT} alt="Takapic Logo" className="spinning-logo" />        
      <span className="brand-text">TAKAPIC</span>

      <h1 className="thankyou-heading">Thank You for Your Purchase!</h1>
      <p className="thankyou-subtext">Your order has been placed successfully.</p>
      <p className="thankyou-subtext">
        Your AI video will be sent to the email address you provided.
      </p>
      <p className="thankyou-subtext">
        We appreciate your business and hope to see you again soon!
      </p>
      <button className="upload-button" onClick={handleBuyClick}>Back to Home</button>
      <button className="upload-button5" onClick={handleBuyClick}>
        Back to Home
      </button>
    </div>
  );
}

export default ThankYouPage;
