import { IconsData } from "../data/atomData/IconsData";
import Icons from "../pages/components/atom/Icons";
import LinkBox from "../pages/components/atom/btnBox";

const Home = () => {
  const view = `

      <div class="home__content">

        <div class="text__container">
            <div class="content-text">
                <h2>Hola, Este soy yo</h2>
                <h1>Cesar Zendejas Torres</h1>
                <h3>Desarrollador Jr con experiencia en<br>
                <span class="text"></span>
                </h3>
                <p>Desarrollador de Software con mentalidad de optimización industrial.
                  <br>Experto en transformar procesos operativos complejos en soluciones digitales escalables. 
                  <br>Mi formación técnica en la industria del calzado me ha otorgado una visión única para la resolución lógica de problemas y la eficiencia de sistemas. 
                </p>
            </div>

            <div class="home__soc-icon">
                ${
                  IconsData.length > 0
                    ? IconsData.map((service) => Icons(service)).join("")
                    : "<p>No data loaded</p>"
                }
            </div>

            <div>
              ${LinkBox(0)}
            </div>
        </div>

        <div class="home__img">
          <span class="home-imghover"></span>
        </div>

      </div>
          
    `;
  return view;
};

export default Home;
