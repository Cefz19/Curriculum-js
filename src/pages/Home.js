const Home = () => {
  const view = `
    <section class="container">

        <div class="home__content">

          <div>
            <div class="content-text">
                <h2>Hello, It´s Me</h2>
                <h1>Cesar Zendejas Torres</h1>
                <h3>And I´m a <span class="text"></span></h3>
                <p>I´m a Computer Systems Engineer <br> with extensive experience for over 3 years
                    <br>Expertise is to create and webiste desing
                </p>
            </div>

            <div class="home__soc-icon">
                <a href="#" style="--i:6"><i class='bx bxl-facebook-circle'></i></a>
                <a href="#" style="--i:7"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#" style="--i:8"><i class='bx bxl-linkedin' ></i></a>
                <a href="#" style="--i:9"><i class='bx bxl-github' ></i></a>
            </div>
          </div>
          
          <div>
              <a href="#" class="btn-box">More About Me</a>
          </div>
            
        </div>
        <div class="home__img">
          <span class="home-imghover"></span>
        </div>

      </div>
          
    </section>
    `;
  return view;
};

export default Home;


