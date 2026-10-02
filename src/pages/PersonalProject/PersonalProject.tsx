import TaskTrackerScreenshot from "../../assets/task-tracker-screenshot.png";
import "./PersonalProject.css";

const PersonalProject = () => {
  return (
    <>
      <header className="intro">
        <p className="page-eyebrow">Selected Work / Projects</p>
        <h1 className="heading">Personal Projects</h1>
        <p className="sub-heading">
          A collection of larger projects where I bring together the concepts
          I'm learning and build more complete, real-world applications.
        </p>
        <p className="sub-heading">
          These projects give me an opportunity to work beyond individual
          exercises and explore frontend architecture, full-stack development,
          APIs, databases, authentication, and other technologies as I continue
          expanding my skills.
        </p>
      </header>
      <section>
        <h2 className="pp-explore-title">Built & Experimented</h2>
        <div className="pp-card-grid">
          <div className="project-illustration">
            <img src={TaskTrackerScreenshot} alt="Task Tracker Screenshot" />
          </div>
          <div className="project-details">
            <div className="project-header">
              <span className="project-meta-inline">Full-Stack App</span>
              <span className="project-status-inline unavailable">
                Temporarily unavailable
              </span>
            </div>
            <h3>Task Tracker</h3>
            <p>
              A full-stack task management application for creating, updating,
              completing, and deleting tasks.
            </p>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Typescript</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/kanan-mehta/TaskTracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
              <a
                href="https://task-tracker-xi-dun.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="unavailable"
                aria-disabled="true"
                onClick={(event) => event.preventDefault()}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalProject;
