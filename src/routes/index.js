import Layout from "../pages/Layout";
import Header from "../template/Header";
import Sections from "../pages/components/Sections";
import initializeTyped from "../pages/components/Typed";

const router = () => {
  const header = document.getElementById("header");
  const content = document.getElementById("content");

  // Renderizar header y layout completo
  header.innerHTML = Header();
  content.innerHTML = Layout();

  const sectionsContainer = document.getElementById("sections-container");
  sectionsContainer.innerHTML = Sections();

  // Inicializar Typed (ya existe .text en Home porque Layout lo insertó)
  initializeTyped();
};

export default router;

// import Layout from "../pages/Layout";
// import Header from "../template/Header";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Skill from "../pages/Skill";
// import Projects from "../pages/Projects";
// import Footer from "../pages/Footer";
// import Error404 from "../pages/Error404";

// import getHash from "../utils/getHash";
// import resolveRoutes from "../utils/resolveRoutes";

// import initializeTyped from "../pages/components/Typed";

// const routes = {
//   "/home": Home,
//   "/about": About,
//   "/services": Services,
//   "/skill": Skill,
//   "/projects": Projects,
//   "/contact": Footer,
//   // '/:id': () => '<h2>Dynamic page</h2>',
//   // '/contact': Contact,
// };

// const router = async () => {
//   const header = null || document.getElementById("header");
//   const content = null || document.getElementById("content");

//   header.innerHTML = Header();

//   content.innerHTML = Layout();

//   let hash = getHash();
//   let route = await resolveRoutes(hash);
//   let render = routes[route] ? routes[route] : Error404;

//   const dynamicSection = document.getElementById("dynamic");
//   dynamicSection.innerHTML = await render();

//   if (router === '/home') {
//     initializeTyped();
//   }
// };

// export default router;
