import Home from './Home';
import About from './About';

const Layout = () => {
    const view = `
    <main>
        <section class="home-main">
            ${Home()}
        </section>
        <section>
            ${About()}
        </section>
    </main>
    `
    return view;
}

export default Layout;

