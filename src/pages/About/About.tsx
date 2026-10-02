import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <article className="about-page">
      <header className="about-intro">
        <p className="about-eyebrow">About Me</p>
        <h1>Kanan Mehta</h1>
        <p className="about-lede">
          Frontend engineer building polished, accessible React and TypeScript
          experiences, with a growing focus on full-stack and AI-powered
          applications.
        </p>
        <a className="about-resume-link" href="/KananMehta_CV.pdf" download>
          Download Resume <span aria-hidden="true">↓</span>
        </a>
      </header>

      <div className="about-content">
        <section className="about-story" aria-labelledby="about-story-title">
          <h2 id="about-story-title">A little about my work</h2>
          <p>
            I build modern, scalable web applications with a strong focus on
            React and frontend engineering, while working across the full stack
            when the product calls for it.
          </p>
          <p>
            I enjoy turning complex requirements into clean, intuitive
            interfaces, designing reusable components and maintainable
            architectures, and thinking beyond the UI — from APIs and data flow
            to performance, testing, and deployment.
          </p>
          <p>
            I’m also exploring how AI can be thoughtfully integrated into
            full-stack applications, combining solid engineering fundamentals
            with practical, user-focused AI capabilities.
          </p>
        </section>

        <section className="about-focus" aria-labelledby="about-focus-title">
          <h2 id="about-focus-title">Current focus</h2>
          <ul>
            <li>
              <Link to="/frontend-mentor">Frontend Engineering</Link> — Building
              polished, accessible interfaces with React, TypeScript, and modern
              CSS.
            </li>
            <li>
              <Link to="/react-challenges">
                React &amp; JavaScript Fundamentals
              </Link>{" "}
              — Strengthening core concepts through focused challenges,
              experiments, and reusable implementations. Explore the{" "}
              <Link to="/js-ts-kata">JS/TS Katas</Link> too.
            </li>
            <li>
              <Link to="/js-ts-kata">Problem Solving</Link> — Practicing
              JavaScript/TypeScript katas, algorithms, and common frontend
              patterns.
            </li>
            <li>
              <Link to="/personal-projects">Full-Stack Development</Link> —
              Exploring Node.js, APIs, databases, authentication, and end-to-end
              application architecture.
            </li>
            <li>
              <Link to="/">Continuous Learning</Link> — Turning concepts I learn
              into small, working projects and documenting the process along the
              way.
            </li>
          </ul>
        </section>
      </div>

      <section className="about-skills" aria-labelledby="about-skills-title">
        <header className="about-skills-heading">
          <p className="about-eyebrow">Skills &amp; Technologies</p>
          <h2 id="about-skills-title">Your professional toolkit.</h2>
          <p>
            The tools and practices I bring together to build, connect, and
            deliver web applications.
          </p>
        </header>

        <dl className="about-skill-list">
          <div className="about-skill-row">
            <dt>Frontend</dt>
            <dd>
              <p>Building polished, accessible interfaces across the web.</p>
              <ul className="about-skill-tags">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>MUI</li>
                <li>Redux</li>
              </ul>
            </dd>
          </div>
          <div className="about-skill-row">
            <dt>Backend</dt>
            <dd>
              <p>Connecting interfaces to server logic and web services.</p>
              <ul className="about-skill-tags">
                <li>Node.js</li>
                <li>Express</li>
                <li>REST APIs</li>
              </ul>
            </dd>
          </div>
          <div className="about-skill-row">
            <dt>Data</dt>
            <dd>
              <p>Working with relational and document-based data.</p>
              <ul className="about-skill-tags">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </dd>
          </div>
          <div className="about-skill-row">
            <dt>Tools</dt>
            <dd>
              <p>Supporting collaboration, API testing, and delivery.</p>
              <ul className="about-skill-tags">
                <li>Git</li>
                <li>GitHub</li>
                <li>CI/CD</li>
                <li>Postman</li>
              </ul>
            </dd>
          </div>
          <div className="about-skill-row">
            <dt>Architecture</dt>
            <dd>
              <p>Keeping application experiences clear and maintainable.</p>
              <ul className="about-skill-tags">
                <li>Component architecture</li>
                <li>API integration</li>
                <li>State management</li>
                <li>Responsive design</li>
              </ul>
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
};

export default About;
