import { createPhoto } from "../../presentation/entities/Photo";

const {
  hHome,
  cesar,
  fProject,

  aStore,
} = createPhoto();

const iconExternal = ["bx-link-external"];

export const ProjectsData = [
  {
    title: "HTML | CSS | JS",
    src: hHome.src,
    alt: hHome.alt,
    description:
      "Desarrollo de interfaces de alto rendimiento utilizando JavaScript Vanilla y arquitectura modular. Implemento flujos de trabajo modernos con Webpack y SCSS para optimizar el empaquetado de recursos, garantizando aplicaciones web ligeras, escalables y con un control total sobre el DOM y el rendimiento del navegador.",
    icon: iconExternal,
    link: "https://github.com/Cefz19/Curriculum-js",
  },
  {
    title: "Angular",
    src: aStore.src,
    alt: aStore.alt,
    description:
      "Aplicación de una sola página (SPA) de comercio electrónico de alto rendimiento, diseñada para ofrecer una experiencia de compra fluida y reactiva. Framework: Angular version 19. Rendimiento: Implementación de Lazy Loading en las rutas para acelerar el tiempo de carga inicial. Arquitectura: Uso de una estructura modular y componentes autónomos (Standalone Components) para mejorar la mantenibilidad ",
    icon: iconExternal,
    link: "https://github.com/Cefz19/MyStore",
  },
  {
    src: fProject.src,
    alt: fProject.alt,
    title: ".NET",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde excepturi autem, eius ratione est a tempore ullam ab iusto vitae ipsam, libero deserunt non fuga ex recusandae hic commodi?",
    icon: iconExternal,
    link: "#",
  },
];
