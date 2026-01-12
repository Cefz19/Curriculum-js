import LinkBox from "../atom/btnBox";

const ServiceCard = (title, description, icon = "bx-code", color) => {
  return `

        <div class="card">
            <i class='bx ${icon}' style='color:${color}'></i>
            <h2>${title}</h2>
            <p>${description}</p>
            ${LinkBox(1)}
        </div>
    `;
};

export default ServiceCard;
