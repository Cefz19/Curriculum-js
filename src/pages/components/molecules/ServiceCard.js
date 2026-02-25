import LinkBox from "../atom/btnBox";

const ServiceCard = ({ title, description, preicon,  icon, color, linkIndex }) => {
  return `

        <div class="card">
            <i class='${preicon} ${icon}' style='color:${color}'></i>
            <h2>${title}</h2>
            <p>${description}</p>
            ${LinkBox(linkIndex)}
        </div>
        
    `;
};

export default ServiceCard;
