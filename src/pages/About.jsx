import myPhoto from '../assets/images/Sherry-Kneitz.jpg';
import '../styles/AboutMe.css';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>    
      <div id="about-section">
      <section id="about-photo" >
        <img src={myPhoto} alt="Photo of Sherry" className="sherry-photo"
        />
      </section>

      <section id="about-me">
        <h4>Work History</h4>
          <p>
            I have an eclectic work history ranging from nannying to the
            automotive industry. The most interesting job I have ever had is the
            role of Private Investigator. I was the Manager of Special
            Investigations at MSI Detective Services in the City of Chicago for 5
            years. My work primarily consisted of inside investigations;
            coordinating field work and conducting background, locate, and asset
            investigations. I have quite a few stories!
          </p>

        <h4>My Coding Journey</h4>
          <p>
            The coding seed was planted in my mind a while back when I
            receptionist at a scale company in 2008. I was tasked with utilizing
            Excel for tracking sales leads and other data. I learned how to record
            macros and use formulas, I became obsessed. I would even record macros
            and do formulas in Excel at home, on my own time. But never thinking
            of myself as a <strong>computer person</strong>, so this would lay
            dormant in my mind for nearly a decade. Fast forward to 2020, working
            at a collections agency I overeheard a colleague say that writing
            formulas in Excel is like the very beginning of coding. I was
            immediately intrigued. I surfed the internet and saw many people
            talking on social media about how they changed their careers by
            learning how to code.
          </p>
        </section>
      </div>
    </div>
  );
}
