import { IconsData } from '../data/atomData/IconsData';
import { IconD } from '../data/atomData/iconD';
import Icons from '../pages/components/atom/Icons';


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
                <li><i class="bx ${IconD[0].icon}">contact@gmail.com</i></li>
                <li><i class="bx ${IconD[1].icon}">1234556</i></li>
            </div>

            <div class="contact__icons">
                ${IconsData.length > 0 
                    ? IconsData.map(service => Icons(
                    service.style,
                    service.icon
                )).join('') : '<p>No data loaded</p>'}
            </div>
        </section>

        <section class="contact__form">
            <form class="form__container">
                <input type="text" placeholder="Enter Your Name" required>
                <input type="text" placeholder="Enter Your Last Name" required>
                <input type="" placeholder="Enter Your Email" required>
                <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message"></textarea>
                <input class="send" type="submit" value="submit" >
            </form>
        </section>

        <section class="last__text">
            <p>Developer with love by Cesar Zendejas @2024</p>
            <a href="#" class="top"><i class='bx ${IconD[2].icon}'></i></a>
        </section>

    </div>

    `;
  return view;
};

export default Footer;
