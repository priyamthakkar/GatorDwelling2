import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import './book.css';

export default function Book() {
  // Get the ID of the apartment complex from the URL
  const { id } = useParams();
  
  
  // Use the useNavigate hook to redirect the user after form submission
  const navigate = useNavigate();
  
  // Define a state for the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  
  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server for processing
    // (You'll need to implement this part separately)
    // After successful submission, navigate to the success page
    navigate("/success");
  };
  
  // Define a function to handle form field changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div style={{
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh'
    }}>
        <h2> h</h2>
        <h3> 123</h3>

      <form onSubmit={handleSubmit}>
      <h1> Schedule a tour</h1>
      
        
        <label>


          
         Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
