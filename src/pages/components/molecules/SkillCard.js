const SkillCard = ({ name, preicon, icon, color, classes }) => {
  // Convertimos a array si no lo es para que .map() nunca falle
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
    <div class="bar">
        <div class="icons-container" style="display: flex; align-items: center; margin-bottom: 2px;">
            ${iconsHTML}
        </div>
        <div class="info">
            <span>${name}</span>
        </div>
        <div class="progress-line ${classes}">
            <span></span>
        </div>
    </div>
    `;
};

export default SkillCard;
