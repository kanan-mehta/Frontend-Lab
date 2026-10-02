import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FrontendMentor from "./pages/FrontendMentor/FrontendMentor";
import PersonalProject from "./pages/PersonalProject/PersonalProject";
import ReactChallenges from "./pages/ReactChallenges/ReactChallenges";
import JsTsKata from "./pages/JsTsKata/JsTsKata";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="frontend-lab-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/frontend-mentor" element={<FrontendMentor />} />
          <Route path="/react-challenges" element={<ReactChallenges />} />
          <Route path="/js-ts-kata" element={<JsTsKata />} />
          <Route path="/personal-projects" element={<PersonalProject />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
