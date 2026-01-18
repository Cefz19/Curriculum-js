import Home from "../../modules/Home";
import About from "../../modules/About";
import Services from "../../modules/Services";
import Skill from "../../modules/Skill";
import Projects from "../../modules/Projects";
import Footer from "../../modules/Footer";

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
