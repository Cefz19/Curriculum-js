import Patronaje from "../../assets/imgs/Patron.webp";
import { createPhoto } from "../../presentation/entities/Photo";

const {
  cesar,
  patron,

  hHome,

  fProject,
  fCronograma,
  fDesarrollo,
  fFlujoApp,
  fTipografia,
  fRetro,
  fBenef,
  
} = createPhoto();




export const ImgSpinningData = {
  html_css_js: [
    {
      src: hHome.src,
    }
  ],
  calzado: [
    {
      src: cesar.src,
      title: "Diseno de Calzado",
      description:
        "Especialista en Modelaje y Desarrollo Tecnico de Calzado, con dominio integral desde la conceptualizacion de bocetos hasta producccion en serie. Con experincia en patronaje digital(Romance 2D) y diferentes contrucciones, en focado en optimizar la ergonomia mediante el desarrollo preciso de horma y la digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
    {
      src: patron.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
  ],

  angular: [
    {
      src: fProject.src,
      title: "Tienda online",
      description: "Mostrar Productos para hacer compras online de con entregas",
      details: "Detalles",
    },
    {
      src: Patronaje,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
  ],

  flutter: [
    {
      src: fProject.src,
      title: "Tienda online",
      description: "Mostrar Productos para hacer compras online de con entregas",
      details: "Detalles",
    },
    {
      src: fCronograma.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
    {
      src: fDesarrollo.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
    {
      src: fTipografia.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
    {
      src: fFlujoApp.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
    {
      src: fRetro.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
    {
      src: fBenef.src,
      title: "Patronaje",
      description:
        "Especialista en Modelaje y Desar digitalizacion de procesos para garantiza productos copetitivos y listos para el mercado",
      details: "Detalles",
    },
  ]
};
