import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <a href="https://www.linkedin.com/in/viktor-lantos-31b848187/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/CodingSancho" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-black-800">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
