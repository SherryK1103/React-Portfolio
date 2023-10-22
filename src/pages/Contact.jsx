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
  }






  return (
    <div>
      <section id="contact-me" className="main-content">
        <h2>Contact Me</h2>
        <ul>
          <li> Email: <a href="mailto:sherrykneitz@gmail.com">sherrykneitz@gmail.com</a></li>
          <li> GitHub: <a href="https://github.com/SherryK1103">GitHub Profile</a></li>
          <li> LinkedIn: <a href="https://www.linkedin.com/in/sherry-kneitz-560482186/">LinkedIn Profile</a></li>
        </ul>
      </section>
    </div>
  );
}
