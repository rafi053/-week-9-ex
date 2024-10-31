import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    fname: '',
    email: ''
  });

  const handleChange = (event: any) => {
    console.log(event);
    console.log(event.target);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event);
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;