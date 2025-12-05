import Home from './Home';
import About from './About';

const Layout = () => {
    const view = `
    <main>
        <section id="home" class="home-main">
            ${Home()}
        </section>
        <section id="about">
            ${About()}
        </section>
    </main>
    `
    return view;
}

export default Layout;

