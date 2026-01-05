import { IconsData } from '../data/atomData/IconsData';
import Icons from '../pages/components/atom/Icons';

const Home = () => {
  const view = `

      <div class="home__content">

        <div class="text__container">
            <div class="content-text">
                <h2>Hello, It´s Me</h2>
                <h1>Cesar Zendejas Torres</h1>
                <h3>And I´m a <span class="text"></span></h3>
                <p>I´m a Computer Systems Engineer <br> with extensive experience for over 3 years
                    <br>Expertise is to create and webiste desing
                </p>
            </div>

            <div class="home__soc-icon">
                ${IconsData.length > 0 
                    ? IconsData.map(service => Icons(
                    service.style,
                    service.icon
                )).join('') : '<p>No data loaded</p>'}
            </div>

            <div>
              <a href="#" class="btn-box">More About Me</a>
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
