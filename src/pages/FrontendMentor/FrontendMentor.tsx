import { frontendMentorChallenges } from "../../data/frontendMentor";
import "./FrontendMentor.css";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

const FrontendMentor = () => {
  return (
    <>
      <header className="intro">
        <p className="page-eyebrow">Challenge Archive / Frontend Mentor</p>
        <h1 className="heading">Challenges from Frontend Mentor</h1>
        <p className="sub-heading">
          This is where I practice frontend development through hands-on
          Frontend Mentor challenges.
        </p>
        <p className="sub-heading">
          Each challenge gives me an opportunity to work on a specific set of
          frontend concepts — from HTML and CSS fundamentals to JavaScript,
          accessibility, responsive design, and React — while continuously
          improving how I approach and structure my code.
        </p>
      </header>
      <section>
        <h2 className="fm-explore-title">Explore the Challenges</h2>
        <div className="fm-card-grid">
          {frontendMentorChallenges.map((frontendMentorChallenge) => {
            return (
              <ChallengeCard
                key={frontendMentorChallenge.id}
                id={frontendMentorChallenge.id}
                title={frontendMentorChallenge.title}
                description={frontendMentorChallenge.description}
                concepts={frontendMentorChallenge.concepts}
                githubLink={frontendMentorChallenge.githubLink}
                liveDemo={frontendMentorChallenge.liveDemo}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FrontendMentor;
