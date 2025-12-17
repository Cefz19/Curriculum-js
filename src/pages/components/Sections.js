import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Skill from "../Skill";
import Projects from "../Projects";
import Footer from "../Footer";

const Sections = () => {
  const view = `
        <section class="home__item item" id='home'>${Home()}</section>
        <section class="about__item item" id='about'>${About()}</section>
        <section class="service__item item" id='services'>${Services()}</section>
        <section class="skill__item item" id='skill'>${Skill()}</section>
        <section class="project__item item" id='projects'>${Projects()}</section>
        <section class="contact__item item" id='contact'>${Footer()}</section>
    `;
  return view;
};

export default Sections;
