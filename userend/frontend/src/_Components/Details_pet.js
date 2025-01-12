import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Css/Details_pet.css';
import logo from '../Assets/logo.jpg';

function Details_pet() {
  const { pet_id } = useParams();
  const navigate = useNavigate(); // For navigation
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // State for showing the confirmation message

  useEffect(() => {
    fetch(`http://localhost:5000/getdetails/${pet_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPetData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [pet_id]);

  const handleAdopt = () => {
    // Show confirmation message
    setShowMessage(true);

    // Simulate submission and navigate back after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
      navigate(-1); // Go back to the previous page
    }, 3000);
  };

  if (loading) return <p>Loading pet details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!petData) return <p>Pet not found.</p>;

  return (
    <div className="pet-details-frame">
      {showMessage ? (
        <div className="confirmation-frame">
          <img
            src={logo} // Replace with the correct path to your logo
            alt="Logo"
            className="confirmation-logo"
          />
          <h2>Application Submitted!</h2>
          <p>Thank you for your interest in adopting {petData.name}!</p>
          <p>We'll get in touch with you soon.</p>
        </div>
      ) : (
        <>
          <div className="pet-image-section">
            <img
              src={petData.image}
              alt={petData.name}
              className="pet-details-image"
            />
          </div>
          <div className="pet-info-section">
            <h2 className="pet-name">{petData.name}</h2>
            <p>
              <strong>Gender:</strong> {petData.gender}
            </p>
            <p>
              <strong>Age:</strong> {petData.age}
            </p>
            <p>
              <strong>Location:</strong> {petData.location}
            </p>
            <p>
              <strong>Breed:</strong> {petData.breed}
            </p>
            <p>
              <strong>Vaccinated:</strong>{' '}
              {petData.vaccinated ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Category:</strong> {petData.category}
            </p>
            <button
              className="adopt-button"
              onClick={handleAdopt}
            >
              Proceed to Adopt
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Details_pet;
