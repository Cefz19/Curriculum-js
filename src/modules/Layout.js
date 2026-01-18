import Header from '../Template/Header';
import Sections from '../pages/components/Sections';
const Layout = () => {
  return `
        <header class="header__nav">${Header()}</header>
        <main class="main__container">
            ${Sections()}
        </main>
        <footer class="footer__main item" id="contact"></footer>   
        `;
};

export default Layout;
