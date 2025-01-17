import React, { useState } from 'react'

function Form() {
  const [formData , setFormData] = useState({
    name : "",
    email : "",
    message: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({name : '' , email : "" , message : ""})
  }


  const handleChange =(e) => {
    const {name , value} = e.target;
    setFormData((prevData) => ({
      ...prevData , 
      [name] : value
    }))
  }


  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
      </div>
      <button
        type="submit"
        style={{
          padding: '10px 15px',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default Form