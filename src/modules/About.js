import { images } from "../data/images/img";
import LinkBox from "../pages/components/atom/btnBox";

const About = () => {
  const view = `
    <section class="about__container">

        <div class="content">
            <div class="wrapper__img">
                <img src="${images[0].src}" alt="${images[0].alt}">
            </div>

            <div class="wrapper__text">
                <h2>About<span>Me</span></h2>
                <h4>Full Stack Developer!</h4>
                <p>
                    Ingeniero en Sistemas Computacionales con experiencia combinada 
                    <br/> en desarrollo de software, base de datos y metodologías agiles. 
                    <br/> Enfocado en desarrollo móvil y web, además de integración de APIs 
                    <br/> en la nube y gestión de datos. Integrado en desarrollo colaborativo  
                    <br/> e implementado controles de versiones, aportando soluciones escalables . 
                    <br/> y orientada a resultados Complementado con experiencia en procesos industriales 
                    <br/> como técnico modelista certificado, lo que permite una visión  
                    <br/> integral de innovación y mejora continua.
                </p>

                ${LinkBox(1)}
            </div>
        </div>
            
    </section>
    `;
  return view;
};

export default About;
