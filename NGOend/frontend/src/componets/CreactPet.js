import React, { useEffect, useState } from "react";
import pic2 from "./Assets/addpet.jpeg";
import './CSS/CreatePet.css'; // Import the CSS file

function CreatePet() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [vacinated, setVacinated] = useState(false);
  const [breed, setBreed] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState(null); // The image file
  const [url, setUrl] = useState(""); // URL of the uploaded image
  const [successMessage, setSuccessMessage] = useState(""); // Submission success message

  // Handle image file input and preview
  const loadFile = (event) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // Free memory
    };
    setPic(event.target.files[0]); // Set the image file to the state
  };

  // Handle image upload to Cloudinary
  const postImage = (pic) => {
    if (!pic) {
      console.log("No image selected");
      return;
    }

    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "Happy_Tails_Network"); // Cloudinary upload preset
    data.append("cloud_name", "dyt9ga9sg"); // Cloudinary cloud name

    fetch("https://api.cloudinary.com/v1_1/dyt9ga9sg/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url); // Save the image URL to the state
        console.log("Image uploaded successfully: ", data.url);
      })
      .catch((err) => console.log("Error uploading image:", err));
  };

  useEffect(() => {
    if (pic) {
      postImage(pic);
    }
  }, [pic]);

  // Submit pet data along with image URL to backend
  const postData = () => {
    if (!name || !url) {
      alert("Please provide both name and image.");
      return;
    }

    fetch("http://localhost:5000/addpet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        gender,
        location,
        age,
        vacinated,
        breed,
        category,
        description,
        image: url, // Include the image URL in the request
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Error:", data.error);
        } else {
          console.log("Pet added successfully:", data.message);

          // Display success message
          setSuccessMessage("Pet profile created successfully!");

          // Reset the form fields
          setName("");
          setGender("");
          setLocation("");
          setAge("");
          setVacinated(false);
          setBreed("");
          setCategory("");
          setDescription("");
          setPic(null);
          setUrl("");
          document.getElementById("output").src = ""; // Clear image preview

          // Clear success message after 3 seconds
          setTimeout(() => setSuccessMessage(""), 3000);
        }
      })
      .catch((err) => console.log("Error submitting pet data:", err));
  };

  return (
    <div className="create-pet-wrapper">
      {/* Left Section with Image */}
      <div className="left-section">
        <div className="image-container">
          <img src={pic2} alt="Illustration" />
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="right-section">
        <h2>Create Pet Profile</h2>
        <p>Fill out the form to add a new pet.</p>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="form-container">
          {/* Form Row */}
          <div className="form-row">
            <label>Pet's Name:</label>
            <input
              type="text"
              placeholder="Enter Pet's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Pet Gender:</label>
            <input
              type="text"
              placeholder="Enter Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Age:</label>
            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Breed:</label>
            <input
              type="text"
              placeholder="Enter Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Category:</label>
            <input
              type="text"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Description:</label>
            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-row-checkbox">
            <label>Vaccinated:</label>
            <input
              type="checkbox"
              checked={vacinated}
              onChange={(e) => setVacinated(e.target.checked)}
            />
          </div>

          <div className="form-row">
            <label>Upload Image:</label>
            <input type="file" accept="image/*" onChange={loadFile} />
          </div>
          <div className="form-row">
            <label>Image Preview:</label>
            <img id="output" alt="Selected pet" style={{ width: '100%', maxHeight: '300px' }} />
          </div>

          {/* Submit Button */}
          <button className="submit-btn" type="button" onClick={postData}>
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePet;
