import Home from './Home';
import About from './About';
import Services from './Services';
import Skill from './Skill';
import Projects from './Projects';
import Footer from './Footer';

const Layout = () => {
    const view = `
        <main>
            <section class="item" id="home">
                ${Home()}
            </section>
            <section class="item" id="about">
                ${About()}
            </section>
            <section class="item" id="services">
                ${Services()}
            </section>
            <section class="item" id="skill">
                ${Skill()}
            </section>
            <section class="item" id="projects">
                ${Projects()}
            </section>
        </main>
        <footer id="contact">
            ${Footer()}
        </footer>
    `
    return view;
}

export default Layout;

