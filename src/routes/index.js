import Layout from "../modules/Layout";
import initSectionAnimations from "../utils/sectionAnimations";
import initializeTyped from "../pages/components/Typed";
import PorfolioPDF from '../pages/docs/PorfolioPDF';
import SpinningCards from '../pages/components/molecules/SpinningCards';
import { ImgSpinningData } from "../data/moleculesData/SpinningData";
import { PorfolioDataPDF } from "../data/docsData/PorfolioData";

const router = () => {
  const content = document.getElementById("content");
  const fullHash = window.location.hash || "#home" || "";

  const [hash, category] = fullHash.split('/');

  if (hash === "#pdf" && hash) {
    const { atitle, title, src } = PorfolioDataPDF[0]
    content.innerHTML = `
    <main>
      ${PorfolioPDF(atitle, title, src)}
    </main>`;
    

    document.getElementById("download")?.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = './cv-ing-sist-com.pdf';
      link.download = "cv-ing-sist-com.pdf";
      link.click();
    });
  } else if(hash === '#details') {

    const selectedData = ImgSpinningData[category] || ImgSpinningData['calzado'];

    const cardsHTML = selectedData.map(data => SpinningCards(data.src, data.title, data.description, data.details)).join('');
    content.innerHTML = `
      <div class="details-screen">
        <div class="cards-grid">
          ${cardsHTML}
        </div>
        <a href="#home" class="back-link">Back to Home</a>
      </div>
    `;
    window.scrollTo(0, 0);
  }
  else {
    content.innerHTML = Layout();

    requestAnimationFrame(() => {
      // Inicializar Typed (ya existe .text en Home porque Layout lo insertó)
      initializeTyped();
      initSectionAnimations();

      // 3. Solo ahora hacemos visible el body
      document.body.classList.add("visible");

      if (module.hot) {
        module.hot.accept();
      }
    });
  };
};

export default router;
