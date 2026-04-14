import { expresiones } from "./constantes.js";
import { toggleCampoEstado } from "./ui-helpers.js";

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario .formulario__input");

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
};

const validarFormulario = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  // Mapa de validación: más limpio que un switch
  const validaciones = {
    usuario: () => validarCampo("usuario", expresiones.usuario, e.target),
    nombre: () => validarCampo("nombre", expresiones.nombre, e.target),
    email: () => validarCampo("correo", expresiones.correo, e.target),
    // ... añadir el resto
  };

  if (validaciones[name]) validaciones[name]();
};

const validarCampo = (campo, expresion, input) => {
  const esValido = expresion.test(input.value);
  campos[campo] = esValido;
  toggleCampoEstado(campo, esValido);
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
    const exito = document.getElementById("formulario__mensaje-exito");
    exito.classList.add("formulario__mensaje-exito-activo");

    setTimeout(() => {
      exito.classList.remove("formulario__mensaje-exito-activo");
    }, 5000); // 5 segundos
  }
});
