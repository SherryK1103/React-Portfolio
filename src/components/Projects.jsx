import greenThumb from '../assets/images/GREEN-THUMB-SS.png';
// import all other photos up here

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
      description: 'Talk about the Green Thumb Guide HERE.',
      link: 'https://github.com/SherryK1103/Green-Thumb-Guide',
      imageSrc: { greenThumb },
    },
    // Add data for other projects here
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
