import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the email field
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, email: 'Invalid email address' });
      } else {
        setErrors({ ...errors, email: ''});
      }
    }
  
    // Clear validation error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: ''});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!errors.email && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
  }

  setErrors(newErrors);

  // If no errors, proceed with form submission
  if (Object.keys(newErrors).length === 0) {
    // Handle form submission
    console.log(formData);
    }
  };

  return (
    <div>
      <section id="contact-me">
        <h2>Contact Me</h2>
        <ul>
          <li> Email: <a href="mailto:sherrykneitz@gmail.com">sherrykneitz@gmail.com</a></li>
          <li> GitHub: <a href="https://github.com/SherryK1103">GitHub Profile</a></li>
          <li> LinkedIn: <a href="https://www.linkedin.com/in/sherry-kneitz-560482186/">LinkedIn Profile</a></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
