import LinkBox from "../atom/btnBox";

const ServiceCard = ({ title, description, preicon,  icon, color }) => {
  return `

        <div class="card">
            <i class='${preicon} ${icon}' style='color:${color}'></i>
            <h2>${title}</h2>
            <p>${description}</p>
            ${LinkBox(2)}
        </div>
        
    `;
};

export default ServiceCard;
