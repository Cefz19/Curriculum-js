import { IconsData } from '../data/atomData/IconsData';
import Icons from '../pages/components/atom/Icons';
import LinkBox from '../pages/components/atom/btnBox';

const Home = () => {
  const view = `

      <div class="home__content">

        <div class="text__container">
            <div class="content-text">
                <h2>Hello, It´s Me</h2>
                <h1>Cesar Zendejas Torres</h1>
                <h3>Desarrollador Jr. con experiencia <br>
                <span class="text"></span>
                </h3>
                <p>I´m a Computer Systems Engineer 
                  <br> with extensive experience for over 3 years
                  <br>Expertise is to create and website desing
                </p>
            </div>

            <div class="home__soc-icon">
                ${IconsData.length > 0 
                    ? IconsData.map(service => Icons(service)).join('')
                    : '<p>No data loaded</p>'}
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
