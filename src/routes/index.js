import Header from '../template/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../pages/Layout';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/about': About,
    '/:id': () => '<h2>Dynamic page</h2>',
    // '/contact': Contact,
}

const  router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    console.log('Hash:', hash, 'Route:', route);
    content.innerHTML = Layout(await render());
}

export default router;