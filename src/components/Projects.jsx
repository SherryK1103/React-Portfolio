import '../styles/ProjectPort.css';

// import mvcPhoto from '../assets/images/MVC-SS.png';
// import notePhoto from '../assets/images/NOTE-TAKER-SC.png';
import fiftyStates from '../assets/images/50-STATES-SCREENSHOT.png';
import weatherDash from '../assets/images/WEATHER-DASH-SS.png';
import workDay from '../assets/images/workday-scheduler-5.png';


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
    // {
    //   name: 'MVC Tech Blog',
    //   description: 'A CMS-style blog site with the purpose of publishing articles, blog posts, and sharing thoughts and opinions.',
    //   link: 'https://github.com/SherryK1103/MVC-Tech-Blog',
    //   deployedLink: 'https://vast-dusk-28814-bab9820d09f9.herokuapp.com/',
    //   imageSrc: mvcPhoto,
    // },
    // {
    //   name: 'Note Taker',
    //   description: 'A platform that enables users to write and save notes. This platform aims to facilitate users in organizing their thoughts and tracking tasks that need completion.',
    //   link: 'https://github.com/SherryK1103/Note-Taker-08',
    //   deployedLink: 'https://intense-chamber-09330-07a5b76c6b1e.herokuapp.com/',
    //   imageSrc: notePhoto,
    // },
    {
      name: '50 States Flash Facts',
      description: 'A website where you can easily learn some basic and quick facts about each of the 50 United States of America in a flashcard-like format.',
      link: 'https://github.com/SherryK1103/Group-Challenge-01-50-States',
      deployedLink: 'https://sherryk1103.github.io/Group-Challenge-01-50-States/',
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
