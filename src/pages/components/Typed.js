let typedInitialized = false;

export default function initializeTyped() {
  if (typedInitialized) return; // Evita inicializar dos veces

  const startTyped = () => {
    const target = document.querySelector(".text");

    if (!target) return; // Si Home no está en el DOM aún, no hace nada

    if (window.Typed) {
      typedInitialized = true;

      new Typed(".text", {
        strings: ['Modelista de Calzado', 'App Moviles', 'Sistemas POS', 'Gestion de Base de Datos'],
        typeSpeed: 95,
        backSpeed: 70,
        loop: true,
        showCursor: true,
        cursorChar: ".",
        smartBackspace: true,
      });
    }
  };

  // 1. Esperar a que el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startTyped);
  } else {
    startTyped();
  }

  // 2. Si Typed.js aún no cargó, esperar hasta que exista
  const checkTyped = setInterval(() => {
    if (window.Typed) {
      clearInterval(checkTyped);
      startTyped();
    }
  }, 100);
}
