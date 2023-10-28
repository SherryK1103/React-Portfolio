import Projects from '../components/Projects';
import '../styles/ProjectPort.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Projects /> {/* Include the Projects component */}
    </div>
  );
}



// export default function Portfolio() {
//   return (
//     <div>
//       <h1>Portfolio</h1>

//       <section id="my-work" className="main-content">
//         {/* Project One *************************************/}
//         <div>
//           <h4>Green Thumb Guide</h4>
//           <p id="green-title">Green Thumb Guide</p>
//         </div>

//         {/* Project Two ***********************************************/}
//         <div className="card">
//           <h4>MVC Tech Blog</h4>
//           <p>
//             The SEO HTML Refactor assignment was my first project at the
//             NorthWestern University Coding Bootcamp. We were given a webpage
//             with code and were charged with consolidating redundant code,
//             changing it from non-semantic elements to semantic elements to
//             improve SEO as well as comply with AAA standards. This assignment
//             displayed the skills I had learned in HTML and CSS.
//           </p>
//           <p id="mvc-title">MVC Tech Blog</p>
//         </div>

//         {/* Project Three ***************************************/}
//         <div className="card">
//           <h4>Note Taker</h4>
//           <p>
//             The SEO HTML Refactor assignment was my first project at the
//             NorthWestern University Coding Bootcamp. We were given a webpage
//             with code and were charged with consolidating redundant code,
//             changing it from non-semantic elements to semantic elements to
//             improve SEO as well as comply with AAA standards. This assignment
//             displayed the skills I had learned in HTML and CSS.
//           </p>
//           <a href="https://github.com/SherryK1103/Note-Taker-08">
//             <img
//               src="../assets/images/NOTE-TAKER-SC.png"
//               alt="screenshot of note taker"
//               className="note-photo"
//             />
//           </a>
//           <p id="note-title">Note Taker</p>
//         </div>

//         {/* Project Four **************************************************/}
//         <div className="card">
//           <h4>50 States Flash Facts</h4>
//           <p>
//             The SEO HTML Refactor assignment was my first project at the
//             NorthWestern University Coding Bootcamp. We were given a webpage
//             with code and were charged with consolidating redundant code,
//             changing it from non-semantic elements to semantic elements to
//             improve SEO as well as comply with AAA standards. This assignment
//             displayed the skills I had learned in HTML and CSS.
//           </p>
//           <a href="https://github.com/SherryK1103/Group-Challenge-01-50-States">
//             <img
//               src="../assets/images/50-STATES-SCREENSHOT.png"
//               alt="screenshot of 50 states project"
//               className="50-photo"
//             />
//           </a>
//           <p id="50-title">50 States Flash Facts</p>
//         </div>

//         {/* Project Five ******************************************************/}
//         <div className="card">
//           <h4>Weather Dashboard</h4>
//           <p>
//             The SEO HTML Refactor assignment was my first project at the
//             NorthWestern University Coding Bootcamp. We were given a webpage
//             with code and were charged with consolidating redundant code,
//             changing it from non-semantic elements to semantic elements to
//             improve SEO as well as comply with AAA standards. This assignment
//             displayed the skills I had learned in HTML and CSS.
//           </p>
//           {/* Add link to deployed site */}
//           <a href="https://github.com/SherryK1103/Weather-Dashboard-06">
//             <img
//               src="../assets/images/WEATHER-DASH-SS.png"
//               alt="screenshot of weather dashboard"
//               className="weather-photo"
//             />
//           </a>
//           <p id="weather-title">Weather Dashboard</p>
//         </div>

//         {/* Project Six *******************************************************/}
//         <div className="card">
//           <h4>Workday Scheduler</h4>
//           <p>
//             The SEO HTML Refactor assignment was my first project at the
//             NorthWestern University Coding Bootcamp. We were given a webpage
//             with code and were charged with consolidating redundant code,
//             changing it from non-semantic elements to semantic elements to
//             improve SEO as well as comply with AAA standards. This assignment
//             displayed the skills I had learned in HTML and CSS.
//           </p>
//           {/* Add link to deployed site */}
//           <a href="https://sherryk1103.github.io/SEO_HTML-Refactor/">
//             <img
//               src="../assets/images/workday-scheduler-5.png"
//               alt="screenshot of workday scheduler"
//               className="first-webpage-photo"
//             />
//           </a>
//           <p id="project_one_title">SEO HTML Refactor</p>
//         </div>
//       </section>
//     </div>
//   );
// }
