import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { jsTsKatas } from "../../data/jsTsKata";
import "./JsTsKata.css";

const ReactChallenges = () => {
  return (
    <>
      <header className="intro">
        <h1 className="heading">JavaScript & TypeScript Katas</h1>
        <p className="sub-heading">
          A collection of JavaScript and TypeScript problems designed to sharpen
          problem-solving, core language concepts, algorithms, and practical
          coding skills.
        </p>
      </header>
      <section>
        <h2 className="rc-explore-title">Solve. Test. Refactor. Repeat.</h2>
        <div className="rc-card-grid">
          {jsTsKatas.map((jsTsKata) => {
            return (
              <ChallengeCard
                key={jsTsKata.id}
                id={jsTsKata.id}
                title={jsTsKata.title}
                description={jsTsKata.description}
                concepts={jsTsKata.concepts}
                githubLink={jsTsKata.githubLink}
                liveDemo={jsTsKata.liveDemo}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ReactChallenges;
