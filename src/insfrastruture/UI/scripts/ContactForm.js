import { expresiones } from "../../../utils/constants";
import { toggleCampoEstado, campos } from "../FormHelpers";

export const initContactForm = () => {
  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario .formulario__input");

  if (!formulario) return;

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre");
        break;
      case "apellido":
        validarCampo(expresiones.apellido, e.target, "apellido");
        break;
      case "email":
        // Importante: El tercer parámetro debe ser "email" para que coincida con grupo__email
        validarCampo(expresiones.correo, e.target, "email");
        break;
      case "mensaje":
        // Validación simple para el textarea
        const esValido = e.target.value.length >= 10;
        toggleCampoEstado(esValido, "mensaje");
        break;
    }
  };

  const validarCampo = (expresion, input, campo) => {
    const esValido = expresion.test(input.value);
    toggleCampoEstado(esValido, campo);
  };

  // Event Listeners
  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoValido = Object.values(campos).every((val) => val === true);

    if (todoValido) {
      formulario.reset();
      Object.keys(campos).forEach((k) => (campos[k] = false));
      const exito = document.getElementById("formulario__mensaje-exito");
      exito.classList.add("formulario__mensaje-exito-activo");

      setTimeout(() => {
        exito.classList.remove("formulario__mensaje-exito-activo");
      }, 5000); // 5 segundos
    } else {
      document
        .getElementById("formulario__mensaje")
        .classList.add("formulario__mensaje-activo");
    }
  });
};
