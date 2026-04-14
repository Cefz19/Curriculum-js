export const campos = {
  nombre: false,
  apellido: false,
  email: false,
  mensaje: false
};

export const toggleCampoEstado = (esValido, campo) => {
    const grupo = document.getElementById(`grupo__${campo}`);
    const icono = document.querySelector(`#grupo__${campo} i`);
    const errorMsg = document.querySelector(`#grupo__${campo} .formulario__input-error`);

    if (grupo && icono && errorMsg) {
        if (esValido) {
            // Estado Correcto
            grupo.classList.replace("formulario__grupo-incorrecto", "formulario__grupo-correcto") || 
            grupo.classList.add("formulario__grupo-correcto");
            
            errorMsg.classList.remove("formulario__input-error-activo");
            icono.className = "bx bx-check-circle"; // Icono de éxito
            campos[campo] = true;
        } else {
            // Estado Incorrecto
            grupo.classList.replace("formulario__grupo-correcto", "formulario__grupo-incorrecto") || 
            grupo.classList.add("formulario__grupo-incorrecto");
            
            errorMsg.classList.add("formulario__input-error-activo");
            icono.className = "bx bx-x-circle"; // Icono de error
            campos[campo] = false;
        }
    }
};

// if (!grupo.classList.contains("formulario__grupo-correcto"))
//       grupo.classList.add("formulario__grupo-correcto");
//     errorMsg.classList.remove("formulario__input-error--activo");
//     icono.className = "bx bx-check-circle"; // Clases de Boxicons
//   } else {
//     grupo.classList.add("formulario__grupo-incorrecto");
//     grupo.classList.remove("formulario__grupo-correcto");
//     errorMsg.classList.add("formulario__input-error--activo");
//     icono.className = "";
//   }
