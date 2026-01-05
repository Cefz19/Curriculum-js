import { images } from "../data/images/img";

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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, <br/> officia  natus ipsum provident debitis porro accusantium praesentium <br/>expedita eligendi  nisi id iste. Sunt inventore cupiditate voluptates accusantium odit pariatur maxime!
                </p>

                <a href="#" class="btn-box">More About Me</a>
            </div>
        </div>
            
    </section>
    `;
  return view;
};

export default About;
