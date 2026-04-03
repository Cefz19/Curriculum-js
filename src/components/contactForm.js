import { validateEmail, isEmpty } from "../utils/validators";
import { sendFormData } from "../services/formService";

export const initForm = () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    document
      .querySelectorAll(".error-msg")
      .forEach((s) => (s.textContent = ""));

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (isEmpty(data.name) || !validateEmail(data.email)) {
      alert("Por favor, revisa los campos.");
      return;
    }

    try {
      await sendFormData(data);
      alert("Mensaje enviado!");
      from.reset();
    } catch (error) {
      console.log("Error al enviar:", error);
    }
  });
};
