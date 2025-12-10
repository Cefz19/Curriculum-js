import Home from './Home';
import About from './About';
import Services from './Services';
import Skill from './Skill';
import Projects from './Projects';

const Layout = () => {
    const view = `
    <main>
        <section id="home" class="home-main">
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
    </main>
    `
    return view;
}

export default Layout;

