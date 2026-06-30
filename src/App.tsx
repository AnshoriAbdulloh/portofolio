import Header from "./components/layout/Header";
import Education from "./components/sections/Education";
import Hero from "./components/sections/Hero";
import Review from "./components/sections/Review";
import Skill from "./components/sections/Skill";
import "./index.css";

export default function App() {
  return (
    <div
      className={`flex flex-col items-center justify-center font-munika bg-primary`}
    >
      <Header />
      <Hero />
      <Review />
      <Education />
      <Skill />
    </div>
  );
}
