import { createPhoto } from "../../presentation/entities/Photo";

const {
  hHome,
  cesar,
  fProject,
  patron
} = createPhoto();

const iconExternal = ["bx-link-external"]

export const ProjectsData = [
  {
    title: 'HTML | CSS | JS',
    src: hHome.src,
    alt: hHome.alt,
    description: 'Desarrollo de interfaces de alto rendimiento utilizando JavaScript Vanilla y arquitectura modular. Implemento flujos de trabajo modernos con Webpack y SCSS para optimizar el empaquetado de recursos, garantizando aplicaciones web ligeras, escalables y con un control total sobre el DOM y el rendimiento del navegador.',
    icon: iconExternal,
    link: 'https://cefz19.github.io/Curriculum-js/'
  },
  {
    src: cesar.src,
    alt: cesar.alt,
    title: "Angular",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde excepturi autem, eius ratione est a tempore ullam ab iusto vitae ipsam, libero deserunt non fuga ex recusandae hic commodi?",
    icon: iconExternal,
    link: '#'
  },
  {
    src: fProject.src,
    alt: fProject.alt,
    title: ".NET",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde excepturi autem, eius ratione est a tempore ullam ab iusto vitae ipsam, libero deserunt non fuga ex recusandae hic commodi?",
    icon: iconExternal,
    link: '#'
  },
];
