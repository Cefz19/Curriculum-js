import LinkBox from "../atom/btnBox";

const ServiceCard = ({
  title,
  description,
  preicon,
  icon,
  color,
  linkIndex,
}) => {
  const iconsArray = Array.isArray(icon) ? icon : [icon];
  const colorsArray = Array.isArray(color) ? color : [color];

  const iconsHTML = iconsArray
    .map((iconName, index) => {
      // Si hay un color para cada icono lo usa, si no, usa el único color disponible
      const iconColor = colorsArray[index] || colorsArray[0];

      return `<i class="${preicon} ${iconName}" style="color:${iconColor}; margin-right: 2px;"></i>`;
    })
    .join("");

  return `
        <div class="card">
            <div class="icons-container" style="display: flex; align-items: center; margin-bottom: 5px;">
            ${iconsHTML}
        </div>
            <h2>${title}</h2>
            <p>${description}</p>
            ${LinkBox(linkIndex)}
        </div>     
    `;
};

export default ServiceCard;
