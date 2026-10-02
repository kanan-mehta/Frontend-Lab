import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { reactChallenges } from "../../data/reactChallenge";
import "./ReactChallenges.css";

const ReactChallenges = () => {
  return (
    <>
      <header className="intro">
        <p className="page-eyebrow">Practice / React</p>
        <h1 className="heading">React Challenges</h1>
        <p className="sub-heading">
          Small challenges, real components, and plenty of practice — focused on
          strengthening React fundamentals one build at a time.
        </p>
      </header>
      <section>
        <h2 className="rc-explore-title">Think. Build. React.</h2>
        <div className="rc-card-grid">
          {reactChallenges.map((reactChallenge) => {
            return (
              <ChallengeCard
                key={reactChallenge.id}
                id={reactChallenge.id}
                title={reactChallenge.title}
                description={reactChallenge.description}
                concepts={reactChallenge.concepts}
                githubLink={reactChallenge.githubLink}
                liveDemo={reactChallenge.liveDemo}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ReactChallenges;
