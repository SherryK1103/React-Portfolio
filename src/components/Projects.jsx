import '../styles/ProjectPort.css';

// import mvcPhoto from '../assets/images/MVC-SS.png';
// import notePhoto from '../assets/images/NOTE-TAKER-SC.png';
import pwa from '../assets/images/pwa-text-ss.png';
import ecom from '../assets/images/ecom-ss.png';
import fiftyStates from '../assets/images/50-STATES-SCREENSHOT.png';
import weatherDash from '../assets/images/WEATHER-DASH-SS.png';
import workDay from '../assets/images/workday-scheduler-5.png';
import PET from '../assets/images/4PET-SS-NEW.png';

function ProjectCard({ name, description, link, deployedLink, imageSrc }) {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        View Deployed App
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
      <div class="image-card"><img src={imageSrc} alt={`screenshot of ${name}`} className={`${name}-ss`} /></div>
      <p id={`${name.toLowerCase().replace(/ /g, '-')}-title`}>{name}</p>
    </div>
  );
}


function Projects() {
  const projectData = [
    {
      name: 'Pet Social',
      description: 'A unique social media app exclusively for pets and their humans. Finally, a social media haven for pet lovers.',
      link: 'https://github.com/SherryK1103/Pet-Social',
      deployedLink: 'https://guarded-basin-73624-223ecb536746.herokuapp.com/',
      imageSrc: PET,
    },
    // {
    //   name: 'Note Taker',
    //   description: 'A platform that enables users to write and save notes. This platform aims to facilitate users in organizing their thoughts and tracking tasks that need completion.',
    //   link: 'https://github.com/SherryK1103/Note-Taker-08',
    //   deployedLink: 'https://intense-chamber-09330-07a5b76c6b1e.herokuapp.com/',
    //   imageSrc: notePhoto,
    // },
    {
      name: 'Pro Web App Text Editor',
      description: 'A web-based tool designed for professionals in diverse domains, enabling streamlined text-related tasks with a focus on functionality and efficiency.',
      link: 'https://github.com/SherryK1103/Pro-Web-App-Text-Editor',
      deployedLink: 'https://blooming-escarpment-06547-d9b53bb8c380.herokuapp.com/',
      imageSrc: pwa,
    },
    {
      name: 'E-Commerce Back End',
      description: 'A functional Express.js API with Sequelize to interact with a MySQL database for an e-commerce website.',
      link: 'https://github.com/SherryK1103/E-Commerce-Back-End',
      deployedLink: 'https://drive.google.com/file/d/174liSHEB_nrz9nCrZYTgBmyHWvEkrQNI/view',
      imageSrc: ecom,
    },
    {
      name: '50 States Flash Facts',
      description: 'A website where you can easily learn some basic and quick facts about each of the 50 United States of America in a flashcard-like format.',
      link: 'https://github.com/SherryK1103/50-States-Flash-Facts',
      deployedLink: 'https://sherryk1103.github.io/50-States-Flash-Facts/',
      imageSrc: fiftyStates,
    },
    {
      name: 'Weather Dashboard',
      description: 'An application where the user can view the current day weather as well as a 5 day forecast for any city that typed into the search bar, and view all previously searched cities.',
      link: 'https://github.com/SherryK1103/Weather-Dashboard-06',
      deployedLink: 'https://sherryk1103.github.io/Weather-Dashboard/',
      imageSrc: weatherDash,
    },
    {
      name: 'Workday Scheduler',
      description: 'A web application where the user can schedule their day down to the hour.',
      link: 'https://github.com/SherryK1103/Workday-Scheduler-5',
      deployedLink: 'https://sherryk1103.github.io/Workday-Scheduler/',
      imageSrc: workDay,
    },
  ];

  // Below is like a for-loop, pulls from line 17, does a for-loop thingy, and then lines 3-14 formats the card how all the data is supposed to look.
  return (
    <section id="my-work" className="main-content">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}

export default Projects;
