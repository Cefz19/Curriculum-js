import { IconsData } from "../data/atomData/IconsData";
import { IconD } from "../data/atomData/iconD";
import Icons from "../pages/components/atom/Icons";

const Footer = () => {
  const view = `
    <div class="footer__container">

        <section class="contact__text">
            <div class="text__me">
                <h2>Contact <span>Me</span></h2>
                <h4>Les´t work Together</h4>
                <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Optio, dolor vero delectus 
                esse dolorum sit, cupiditate nihi
                </p>
            </div>     

            <div class="contact__list">
                <li><i class="bx ${IconD[0].icon}">molanddise@gmail.com</i></li>
                <li><i class="bx ${IconD[1].icon}">1234556</i></li>
            </div>

            <div class="home__soc-icon">
                ${
                  IconsData.length > 0
                    ? IconsData.map((service) => Icons(service)).join("")
                    : "<p>No data loaded</p>"
                }
            </div>
        </section>

        <section class="contact__form">

            <form class="formulario" id="formulario">

            <div class="formulario__grupo" id="grupo__nombre">

                 <div class="formulario__grupo-input"> 
                    <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="">
                    <label for="nombre" class="formulario__label">Name</label>
                    <i class="formulario__validacion-estado bx bx-x-circle"></i>
                 </div>
                 <span class="formulario__input-error">El nombre tienen que ser de 4 a 16 digitos y solo permite letras</span>

            </div>

             <div class="formulario__grupo" id="grupo__nombre">

                 <div class="formulario__grupo-input"> 
                    <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="">
                    <label for="nombre" class="formulario__label">Enter Your Last Name</label>
                    <i class="formulario__validacion-estado bx bx-x-circle"></i>
                 </div>
                 <span class="formulario__input-error">El nombre tienen que ser de 4 a 16 digitos y solo permite letras</span>

            </div>

            <div class="formulario__grupo" id="grupo__nombre">

                 <div class="formulario__grupo-input"> 
                    <input type="email" class="formulario__input" name="email" id="mail" placeholder="">
                    <label for="email" class="formulario__label">Enter Your Email</label>
                    <i class="formulario__validacion-estado bx bx-x-circle"></i>
                 </div>
                 <span class="formulario__input-error">El correo solo debe de contener letras, numeros, puntos, guiones y guion bajo</span>

            </div>

            <div class="formulario__grupo" id="grupo__mensaje">
                <div class="formulario__grupo-input">
                    <textarea 
                    cols="40" 
                    rows="10"
                    name="mensaje" 
                    id="mensaje" 
                    class="formulario__input" 
                    placeholder=" "
                    ></textarea>
                    <label for="mensaje" class="formulario__label">Enter Your Message</label>
                    <i class="formulario__validacion-estado bx bx-x-circle"></i>
                </div>
                <span class="formulario__input-error">El mensaje debe tener entre 10 y 200 caracteres.</span>
            </div>

            <div class="formulario__mensaje" id="formulario__mensaje">
                <p>
                    <i class='bx bx-error'></i></i><b>Error: </b>Favor de rellenar el formulario
                    correctamente
                </p>
            </div>


            <div class="formulario__grupo formulario__grupo-btn-enviar">
                <button type="submit" class="formulario__btn">Submit</button>
                <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente</p>
            </div>

            </form>

        </section>

        <section class="last__text">
            <p>Developer with love by Cesar Zendejas @2026</p>
            <a href="#" class="top"><i class='bx ${IconD[2].icon}'></i></a>
        </section>

    </div>

    `;
  return view;
};

export default Footer;
