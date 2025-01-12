import React, { useEffect, useState } from 'react';
import './CSS/Viewpets.css';

function Viewpets() {
  const [data, setData] = useState([]); // State initialization

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:5000/getpets', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json()) // Ensure the response is parsed as JSON
      .then((result) => {
        setData(result); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching pets data:', error); // Handle any potential errors
      });
  }, []); // Empty dependency array to only run once on mount

  return (
    <div className="pets-container">
      {data.map((item) => (
        <div key={item._id} className="pet-card">
          <div className="pet-card-header">
            <h3>{item.name}</h3>
          </div>
          <div className="pet-card-body">
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Vaccinated:</strong> {item.vacinated ? 'Yes' : 'No'}</p>
            <p><strong>Breed:</strong> {item.breed}</p>
            <p><strong>Category:</strong> {item.category}</p>
          </div>
          <div className="pet-card-footer">
            <button className="adopt-button">Adopt Me</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Viewpets;
