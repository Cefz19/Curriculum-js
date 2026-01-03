import Layout from "../pages/Layout";
import initSectionAnimations from "../utils/sectionAnimations";
import initializeTyped from "../pages/components/Typed";

const router = () => {
  const content = document.getElementById("content");

  // Renderizar header y layout completo
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

export default router;
