import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Skill from "../Skill";
import Projects from "../Projects";
import Footer from "../Footer";

const Sections = () => {
  return `
        ${Home()}
        ${About()}
        ${Services()}
        ${Skill()}
        ${Projects()}
        ${Footer()}

    `;
};

export default Sections;
