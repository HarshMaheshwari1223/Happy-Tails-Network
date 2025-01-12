import React from "react";
import Navbar from '../_Components/Navbar.js';
import './Css/AdoptionInfo.css';

const AdoptionInfo = () => {
  return (
    <div className="adoption-info-page">
      <Navbar />
      <header className="adoption-header">
        <h1 className="adoption-title">Adopt a Pet</h1>
        <p className="adoption-subtitle">
          "Giving a loving home to a pet is one of the most fulfilling things you can do."
        </p>
      </header>

      <div className="steps-section">
        <h2>Steps to Adopt</h2>
        <ol className="adoption-steps">
          <li>
            <strong>Step 1:</strong> Browse through the list of available pets and select the one that you connect with.
          </li>
          <li>
            <strong>Step 2:</strong> Contact us using the details below or through the adoption request form.
          </li>
          <li>
            <strong>Step 3:</strong> Schedule a home visit or meeting to ensure compatibility with the pet.
          </li>
          <li>
            <strong>Step 4:</strong> Complete the adoption paperwork and formalities.
          </li>
          <li>
            <strong>Step 5:</strong> Bring your new furry friend home and start your beautiful journey together!
          </li>
        </ol>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you're ready to adopt or have any questions, feel free to get in touch!</p>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> adopt@happy-tails.org
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Address:</strong> 123 Pet Lane, Dogtown, India
          </p>
        </div>
        <button className="contact-button">Reach Out to Us</button>
      </div>
    </div>
  );
};

export default AdoptionInfo;
