import React, { useEffect, useState } from 'react';
import './Css/Find_a_pet.css';
import {useNavigate} from "react-router-dom";

function Find_a_pet() {
    const [data, setData] = useState([]);
    const [categories,setCategories]= useState([]);
    const [selectedCategory,setselectedCategory]= useState('');
    const navigate  = useNavigate();
    const go_to_detail=(iteam_id)=>{
        navigate(`/Details_pet/${iteam_id}`);
    }
    const fetchPets = (category = '') => {
        const url = category ? `http://localhost:5000/getpets?category=${category}` : 'http://localhost:5000/getpets';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((result) => {
            setData(result);
        })
        .catch((error) => {
            console.error('Error fetching pets data', error);
        });
    };

    useEffect(() => {
        const staticCategories = ['dog','cat','bird','rabbit'];
        setCategories(staticCategories);
        fetchPets();
    }, []);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setselectedCategory(category);
        fetchPets(category);
    };

    return (
        <div>
        {/* Filter Dropdown */}
        <div className="filter-container">
            <label htmlFor="category-select">Filter by Category:</label>
            <select
                id="category-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="category-select"
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
        <div className="pets-container">
    {data.map((item) => (
        <div key={item._id} className="pet-card-view">
            <div className="pet-card-image">
                <img src={item.image} className="pet-image" alt={item.name} />
            </div>
            <div className="pet-card-header">
                <h3>{item.name}</h3>
            </div>
            <div className="pet-card-body">
                <div className="pet-info">
                    <p><strong>Gender:</strong> {item.gender}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                    
                </div>
                <div className="pet-info">
                    <p><strong>Age:</strong> {item.age}</p>
                    <p><strong>Vaccinated:</strong> {item.vacinated ? 'Yes' : 'No'}</p>
                    
                </div>
                <div className="pet-info">
                <p><strong>Breed:</strong> {item.breed}</p>
                <p><strong>Category:</strong> {item.category}</p>
                </div>
            </div>
            <div className="pet-card-footer">
                <button onClick={()=>{go_to_detail(item._id)}} className="adopt-button">Adopt Me</button>
                
                

            </div>
        </div>
    ))}
</div>
</div>

    );
}

export default Find_a_pet;
