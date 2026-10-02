import LabCard from "../../components/LabCard/LabCard";
import { labItems } from "../../data/labData";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="intro">
        <p className="page-eyebrow">Portfolio / Frontend Development</p>
        <h1 className="heading">Kanan's Frontend Lab</h1>
        <p className="sub-heading">
          Welcome to my Frontend Lab — a collection of my frontend development
          practice, experiments, challenges, and personal projects.
        </p>
        <p className="sub-heading">
          This is where I document what I'm learning and build things to
          strengthen my frontend fundamentals.
        </p>
      </header>
      <section>
        <h2 className="lab-explore-title">Explore the Lab</h2>
        <div className="lab-card-grid">
          {labItems.map((labItem) => {
            return (
              <LabCard
                key={labItem.title}
                title={labItem.title}
                description={labItem.description}
                icon={labItem.icon}
                href={labItem.href}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
