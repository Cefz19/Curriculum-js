import { IconsData } from "../data/atomData/IconsData";
import { IconD } from "../data/atomData/iconD";
import Icons from "../pages/components/atom/Icons";

const Footer = () => {
  const view = `
    <div class="footer__container">

        <section class="contact__text">
            <div class="text__me">
                <h2>Contact <span>Me</span></h2>
                <h4>Les´t Build Something Great</h4>
                <p>
                "Como Ingeniero en Sistemas, mi enfoque va más allá de escribir código: <br/> 
                diseño soluciones escalables integrando desarrollo móvil, web y servicios en la nube.<br/> 
                Mi experiencia previa como Técnico Modelista me ha dado una disciplina <br/> única para la precisión y la optimización de procesos, <br/> permitiéndome ver cada proyecto desde una perspectiva técnica y estratégica. 
                <br/> Si buscas un desarrollador con visión integral, capacidad técnica en APIs y bases de datos, y un fuerte enfoque en resultados...
                <br/> <strong>¡Hablemos! Estoy listo para integrarme a tu equipo o proyecto."</strong>
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
                <!-- NOMBRE -->
                <div class="formulario__grupo" id="grupo__nombre">
                    <div class="formulario__grupo-input"> 
                        <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder=" ">
                        <label for="nombre" class="formulario__label">Name or Names</label>
                        <i class="formulario__validacion-estado bx"></i>
                    </div>
                    <span class="formulario__input-error">4 a 16 dígitos, solo letras.</span>
                </div>

                <!-- APELLIDO (Antes se llamaba igual que nombre) -->
                <div class="formulario__grupo" id="grupo__apellido">
                    <div class="formulario__grupo-input"> 
                        <input type="text" class="formulario__input" name="apellido" id="apellido" placeholder=" ">
                        <label for="apellido" class="formulario__label">Last Name</label>
                        <i class="formulario__validacion-estado bx"></i>
                    </div>
                    <span class="formulario__input-error">4 a 16 dígitos, solo letras.</span>
                </div>

                <!-- EMAIL -->
                <div class="formulario__grupo" id="grupo__email">
                    <div class="formulario__grupo-input"> 
                        <input type="email" class="formulario__input" name="email" id="email" placeholder=" ">
                        <label for="email" class="formulario__label">Enter Your Email</label>
                        <i class="formulario__validacion-estado bx"></i>
                    </div>
                    <span class="formulario__input-error">Formato de correo no válido.</span>
                </div>

                <!-- MENSAJE (Textarea) -->
                <div class="formulario__grupo" id="grupo__mensaje">
                    <div class="formulario__grupo-input">
                        <textarea name="mensaje" id="mensaje" class="formulario__input" placeholder=" "></textarea>
                        <label for="mensaje" class="formulario__label">Enter Your Message</label>
                        <i class="formulario__validacion-estado bx"></i>
                    </div>
                    <span class="formulario__input-error">Entre 10 y 200 caracteres.</span>
                </div>

                <!-- BOTÓN Y MENSAJES -->
                <div class="formulario__mensaje" id="formulario__mensaje">
                    <p><i class='bx bx-error'></i> <b>Error:</b> Rellena el formulario correctamente.</p>
                </div>

                <div class="formulario__grupo formulario__grupo-btn-enviar">
                    <button type="submit" class="formulario__btn">Submit</button>
                    <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Enviado exitosamente</p>
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
