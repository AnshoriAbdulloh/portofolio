import { FaReact, FaNodeJs, FaHtml5, FaGithub } from "react-icons/fa";

import {
  SiTailwindcss,
  SiPlatformio,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiVite,
  SiExpress,
} from "react-icons/si";

const tools = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "HTML", icon: FaHtml5, color: "#dd4b25" },
  { name: "PlatformIO", icon: SiPlatformio, color: "#f77b00" },
  { name: "GitHub", icon: FaGithub, color: "#000000" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
];

export default function Tools() {
  return (
    <section className={`bg-(--secondary) w-full py-10  overflow-hidden`}>
      <h2 className='text-4xl text-center text-black font-bold mb-10'>
        Tools I Use
      </h2>
      <div className='marquee'>
        {[...tools, ...tools].map((tool, index) => {
          const Icon = tool.icon;

          return (
            <div key={index} className='tool'>
              <Icon size={55} style={{ color: tool.color }} />

              <p className={`text-black`}>{tool.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
