import Layout from "../modules/Layout";
import initSectionAnimations from "../utils/sectionAnimations";
import initializeTyped from "../pages/components/Typed";
import PorfolioPDF from '../pages/docs/PorfolioPDF';
import SpinningCards from '../pages/components/molecules/SpinningCards';
import { ImgSpinningData } from "../data/moleculesData/SpinningData";
import { PorfolioDataPDF } from "../data/docsData/PorfolioData";

const router = () => {
  const content = document.getElementById("content");
  const hash = window.location.hash || "#home" || "";

  if (hash === "#pdf" && hash) {
    const { atitle, title, src } = PorfolioDataPDF[0]
    content.innerHTML = PorfolioPDF(atitle, title, src);

    document.getElementById("download")?.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = src;
      link.download = "CV Ing_Sist_Com.pdf";
      link.click();
    });
  } else if(hash === '#details' && hash) {

    const data = ImgSpinningData[0];
    content.innerHTML = `
      <div class="details-screen">
        ${SpinningCards(data.src, data.title, data.description, data.details)}
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
