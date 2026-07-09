import Header from "./components/layout/Header";
import AboutMe from "./components/sections/AboutMe";
import Courses from "./components/sections/Courses";
import CuriculumVitae from "./components/sections/CuriculimVitae";
// import Education from "./components/sections/Education";
import Hero from "./components/sections/Hero";
import Project from "./components/sections/Project";
import Review from "./components/sections/Review";
import Skill from "./components/sections/Skill";
import Tools from "./components/sections/Tools";
import "./index.css";

export default function App() {
  return (
    <div
      className={`flex flex-col items-center justify-center font-munika bg-(--base)`}
    >
      <Header />
      <Hero />
      <Review />
      {/* <Education /> */}
      <Tools />
      <Skill />
      <Courses />
      <Project />
      <CuriculumVitae />
      <AboutMe />
    </div>
  );
}
