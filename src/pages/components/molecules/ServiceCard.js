const ServiceCard = (title, description, icon = "bx-code", color) => {
  return `

        <div class="card">
            <i class='bx ${icon}' style='color:${color}'></i>
            <h2>${title}</h2>
            <p>${description}</p>
            <a href="#" class="read">Learm More</a>
        </div>
    `;
};

export default ServiceCard;
