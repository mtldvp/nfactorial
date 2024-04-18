import React, { useState, useEffect } from 'react';
import '../styles/Donations.css'; // Import CSS file for styling

function Donations() {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonateClick = () => {
    alert(`Thank you for your donation of $${donationAmount}!`);
    setDonationAmount(0);
  };

  const [dogsSaved, setDogsSaved] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDogsSaved(dogsSaved => dogsSaved < 777 ? dogsSaved + 1 : dogsSaved);
    }, 10);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="donations-container">
      <div className="donations-image">
        {/* Replace with a heartwarming image of a homeless dog */}
        <img src={require("../assets/img/saddog.jpg")} alt="Homeless Dog" />
      </div>
      <div className="donations-content">
        <h2>Help Save Homeless Dogs!</h2>
        <p>
          Every day, countless dogs face the harsh realities of homelessness. 
          With your support, we can provide them with food, shelter, medical care, 
          and the love they deserve. 
        </p>
        <div className="donation-input">
          <label htmlFor="donationAmount" style={{margin: "10px"}}>Donation Amount:</label>
          <input 
            type="number" 
            id="donationAmount" 
            value={donationAmount}
            onChange={handleDonationChange} 
          />
        </div>
        <button className="donate-button" onClick={handleDonateClick}>
          Donate Now
        </button>
      </div>
      <div className="donations-impact">

        <h4>We have saved:</h4>
        <div className="dogs-saved">{dogsSaved}</div>
        <h4>Dogs</h4>

      </div>
    </div>
  );
}

export default Donations;