const Footer = () => {
    const view = `
        <section class="footer__contact">

            <div class="contact__text">
                <h2>Contact <span>Me</span></h2>
                <h4>Les´t work Together</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolor vero delectus esse dolorum sit,
                    cupiditate nihi</p>

                <div class="contact__list">
                    <li><i class="bx bxs-send">contact@gmail.com</i></li>
                    <li><i class="bx bxs-phone">1234556</i></li>
                </div>

                <div class="contact__icons">
                    <a href="#"><i class="bx bxl-facebook-circle"></i></a>
                    <a href="#"><i class='bx bxs-x-circle'></i></a>
                    <a href="#"><i class="bx bxl-instagram"></i></a>
                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>

        <section class="contact__form">
            <form action="">
                <input type="text" placeholder="Enter Your Name" required>
                <input type="text" placeholder="Enter Your Last Name" required>
                <input type="" placeholder="Enter Your Email" required>
                <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message"></textarea>
                <input class="send" type="submit" value="submit" >
            </form>
        </section>

        <section class="last__text">
            <p>Developer with love by Cesar Zendejas @2024</p>
            <a href="#" class="top"><i class='bx bx-up-arrow-alt'></i></a>
        </section>
    `
    return view;
}

export default Footer;