import React, { useEffect } from 'react';
import Navbar from '../componets/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Home.css' // Import CSS for home page layout
import bannerImage from './Assets/Home.jpg'; // Example image, update the path accordingly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDog, faCat, faPaw, faHandPointer, faUsers, faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import pet1 from './Assets/Pet1.jpg';
import pet2 from './Assets/Pet2.jpg';
import pet3 from './Assets/Pet5.jpg';
import pet4 from './Assets/Pet4.jpg';

const Home = () => {
  const token=localStorage.getItem('token')
  const navigate=useNavigate();
 
   useEffect(() => {

     if(!token)
     {
       navigate('/signin');
     }
   }, [])


    return (
      <div className="home">
        <Navbar />
        <div className="banner-image">
          <img src={bannerImage} alt="Adopt a pet banner" /> {/* Use bannerImage variable */}
          <div className="banner-text">
            <h1>Welcome to</h1>
            <h1>Happy Tails Network</h1>
            <p>Your one-stop solution to find your perfect pet.</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="buttons-section">
          <button className="custom-button">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Enter your location
          </button>
          <button className="custom-button">
            <FontAwesomeIcon icon={faDog} /> Find a Dog
          </button>
          <button className="custom-button">
            <FontAwesomeIcon icon={faCat} /> Find a Cat
          </button>
          <button className="custom-button">
            <FontAwesomeIcon icon={faPaw} /> Find Other Pets
          </button>
        </div>

        {/* Pet Cards Section */}
        <div className="pet-cards-section">
          <h2>Find your pets</h2>
          <p>More than 3K pets Available for Adoption</p>
          <div style={{display :"flex" , justifyContent:"end", marginRight:"20px",  marginBottom:"20px"}} className="see-more">
            <Link to ="/Find_a_pet">See More <span>&rarr;</span></Link>
          </div>

          <div className="pet-cards-container">
            <div className="pet-card">
              <img src={pet1} alt="Charlie" />
              <p className="pet-name">Charlie</p>
            </div>
            <div className="pet-card">
              <img src={pet2} alt="Jessi" />
              <p className="pet-name">Jessi</p>
            </div>
            <div className="pet-card">
              <img src={pet3} alt="Tom" />
              <p className="pet-name">Tom</p>
            </div>
            <div className="pet-card">
              <img src={pet4} alt="Blade" />
              <p className="pet-name">Blade</p>
            </div>
          </div>
        </div>

        {/* Few Steps For Adopting Section */}
        <div className="adoption-steps">
          <h2>Few Steps For Adopting</h2>
          <div className="steps-container">
            <div className="step">
              <FontAwesomeIcon icon={faHandPointer} className="step-icon" />
              <p>Choose your pet</p>
            </div>
            <div className="step">
              <FontAwesomeIcon icon={faUsers} className="step-icon" />
              <p>Meet Us</p>
            </div>
            <div className="step">
              <FontAwesomeIcon icon={faFileAlt} className="step-icon" />
              <p>Fill the Adoption paper</p>
            </div>
            <div className="step">
              <FontAwesomeIcon icon={faHome} className="step-icon" />
              <p>Let Your Pet Get New Home</p>
            </div>
          </div>
        </div>
        <div className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <p>
                {/* <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />  */}
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
              </p>
              <div className="user-info">
                <img src={pet1} alt="Alicia Jones" />
                <p>Alicia Jones</p>
              </div>
            </div>
            <div className="testimonial">
              <p>
                {/* <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" /> */}
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
              </p>
              <div className="user-info">
                <img src={pet2} alt="Marvin Meyer" />
                <p>Marvin Meyer</p>
              </div>
            </div>
          </div>
        </div>
       {/* Footer Section */}
       <div className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>About</h3>
              <ul>
                <li><a href="#">About Petfinder</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of services</a></li>
                <li><a href="#">Partnership</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Pet Adoption</h3>
              <ul>
                <li><a href="#">Dog Adoption</a></li>
                <li><a href="#">Cat Adoption</a></li>
                <li><a href="#">Other Pets Adoption</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Pet Care</h3>
              <ul>
                <li><a href="#">Dog Care</a></li>
                <li><a href="#">Cat Care</a></li>
                <li><a href="#">Dog Breeds</a></li>
              </ul>
            </div>

            <div className="footer-section newsletter">
              <h3>Newsletter</h3>
              <p>To get the latest news of new pets and services</p>
              <button className="signup-button">Sign Up</button>
            </div>

            <div className="footer-section follow-us">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;