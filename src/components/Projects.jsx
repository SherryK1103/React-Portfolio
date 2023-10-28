import greenThumb from '../assets/images/GREEN-THUMB-SS.png';
// import all other photos up here
import mvcPhoto from '../assets/images/MVC-SS.png';

function ProjectCard({ name, description, link, imageSrc }) {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={link}>
        <img src={imageSrc} alt={`screenshot of ${name}`} className={`${name}-ss`} />
      </a>
      <p id={`${name.toLowerCase().replace(/ /g, '-')}-title`}>{name}</p>
    </div>
  );
}

function Projects() {
  const projectData = [
    {
      name: 'Green Thumb Guide',
      description: 'A website where you can search a plant database on how to best care for your indoor plants.',
      link: 'https://github.com/SherryK1103/Green-Thumb-Guide',
      imageSrc: { greenThumb },
    },
    // Add data for other projects here

    {
      name: 'MVC Tech Blog',
      description: 'Write about MVC Tech Blog here.',
      link: 'https://github.com/SherryK1103/MVC-Tech-Blog',
      imageSrc: { mvcPhoto },
    },

    {
      name: 'Note Taker',
      description: 'A website where you can search a plant database on how to best care for your indoor plants.',
      link: 'https://github.com/SherryK1103/Green-Thumb-Guide',
      imageSrc: { greenThumb },
    },

    {
      name: '50 States Flash Facts',
      description: 'A website where you can search a plant database on how to best care for your indoor plants.',
      link: 'https://github.com/SherryK1103/Green-Thumb-Guide',
      imageSrc: { greenThumb },
    },

    {
      name: 'Weather Dashboard',
      description: 'A website where you can search a plant database on how to best care for your indoor plants.',
      link: 'https://github.com/SherryK1103/Green-Thumb-Guide',
      imageSrc: { greenThumb },
    },

    {
      name: 'Workday Scheduler',
      description: 'A website where you can search a plant database on how to best care for your indoor plants.',
      link: 'https://github.com/SherryK1103/Green-Thumb-Guide',
      imageSrc: { greenThumb },
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
