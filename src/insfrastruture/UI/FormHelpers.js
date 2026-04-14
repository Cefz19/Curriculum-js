export const campos = {
  nombre: false,
  apellido: false,
  email: false,
  mensaje: false
};

export const toggleCampoEstado = (esValido, campo) => {
    const grupo = document.getElementById(`grupo__${campo}`);
    const icono = document.querySelector(`#grupo__${campo} .formulario__validacion-estado`); // Usa la clase del SCSS

    if (grupo && icono) {
        if (esValido) {
            grupo.classList.remove("formulario__grupo-incorrecto");
            grupo.classList.add("formulario__grupo-correcto");
            icono.className = "bx bx-check-circle formulario__validacion-estado"; 
            campos[campo] = true;
        } else {
            grupo.classList.remove("formulario__grupo-correcto");
            grupo.classList.add("formulario__grupo-incorrecto");
            icono.className = "bx bx-x-circle formulario__validacion-estado";
            campos[campo] = false;
        }
    }
};
