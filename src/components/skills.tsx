import { FaReact, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiGraphql, SiMongodb } from 'react-icons/si';
import Image from "next/image";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div className="flex items-center space-x-2">
        Skills
      </div>
      <div className="flex items-center space-x-2">
        <FaReact size={30} className="text-blue-500" />
        <span>React</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiTypescript size={30} className="text-blue-600" />
        <span>TypeScript</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiJavascript size={30} className="text-yellow-500" />
        <span>JavaScript</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaDocker size={30} className="text-blue-400" />
        <span>Docker</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiTailwindcss size={30} className="text-blue-300" />
        <span>Tailwind CSS</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiGraphql size={30} className="text-pink-500" />
        <span>GraphQL</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiMongodb size={30} className="text-green-500" />
        <span>MongoDB</span>
      </div>
      <div className="mb-8">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={72}
            height={16}
            priority
          />
        </div>
    </div>
    
  );
};

export default Skills;
