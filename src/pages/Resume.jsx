import '../styles/Resume.css';

const Resume = () => {
  return (
    <div>
      <h1>Sherry Kneitz Resume</h1>
      <p>
        I am a dedicated and experienced professional with a strong background in operations, investigations, and analysis. With a proven track record of effective case management and data analysis, I have successfully supervised teams, managed complex investigations, and maintained a high level of accuracy and compliance in my work. My experience includes process management, documentation preparation, and a deep understanding of proprietary investigative databases. I am a proficient user of various software tools and have a strong aptitude for cross-functional teamwork. In addition to my professional work, I'm passionate about volunteer work, including helping the homeless, supporting children's nonprofits, and participating in community activities. I'm also committed to continuous learning and recently completed the Northwestern University EdEx Fullstack Web Development Bootcamp.
      </p>
      
      <h2>Download My Resume</h2>
      <a href="https://docs.google.com/document/d/1Czj3OX7-QHnIuQOPrjbMYuQsBAXlDMniP_cVCiXP29c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>

      <div className="proficiencies">
        <h2>Coding Proficiencies</h2>
        <ul>
          <li>Front-end Development: HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Back-end Development: Node.js, Express.js</li>
          <li>Database Management: MongoDB, MySQL</li>
          <li>API Development and Integration</li>
          <li>Version Control: Git, GitHub</li>
          <li>Responsive Web Design</li>
          <li>UI/UX Design Principles</li>
          <li>RESTful API Design</li>
          <li>Web Security and Best Practices</li>
          <li>Testing and Debugging</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
