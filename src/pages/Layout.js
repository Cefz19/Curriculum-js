import Home from './Home';
import About from './About';
import Services from './Services';
import Skill from './Skill';
import Projects from './Projects';
import Footer from './Footer';

const Layout = () => {
    const view = `
        <section>
            ${Home()}
        </section>
        <section id="about">
            ${About()}
        </section>
        <section id="services">
            ${Services()}
        </section>
        <section id="skill">
            ${Skill()}
        </section>
        <section id="projects">
            ${Projects()}
        </section>
        <section id="contact">
            ${Footer()}
        </section>
    `
    return view;
}

export default Layout;

