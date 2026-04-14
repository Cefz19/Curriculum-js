export const toggleCampoEstado = (campo, esValido) => {
    const grupo = document.getElementById(`grupo__${campo}`);
    const icono = document.querySelector(`#grupo__${campo} i`); // Cambiado a <i> por Boxicons
    const errorMsg = document.querySelector(`#grupo__${campo} .formulario__input-error`);

    if (esValido) {
        grupo.classList.replace("formulario__grupo-incorrecto", "formulario__grupo-correcto");
        if (!grupo.classList.contains("formulario__grupo-correcto")) grupo.classList.add("formulario__grupo-correcto");
        errorMsg.classList.remove("formulario__input-error--activo");
        icono.className = 'bx bx-check-circle'; // Clases de Boxicons
    } else {
        grupo.classList.add("formulario__grupo-incorrecto");
        grupo.classList.remove("formulario__grupo-correcto");
        errorMsg.classList.add("formulario__input-error--activo");
        icono.className = 'bx bx-x-circle';
    }
};