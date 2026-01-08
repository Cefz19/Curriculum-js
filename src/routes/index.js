import Layout from "../pages/Layout";
import initSectionAnimations from "../utils/sectionAnimations";
import initializeTyped from "../pages/components/Typed";
import PorfolioPDF from '../pages/docs/PorfolioPDF';
import { PorforDataPDF } from "../data/docsData/PorfolioData";

const router = () => {
  const content = document.getElementById("content");
  const hash = window.location.hash || "#home";

  if (hash === "#pdf") {
    const { atitle, title, src } = PorforDataPDF[0]
    content.innerHTML = PorfolioPDF(atitle, title, src);

    document.getElementById("download")?.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = src;
      link.download = "SAT_Document.pdf";
      link.click();
    });
  } else {
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
  // Renderizar header y layout completo
};

export default router;
