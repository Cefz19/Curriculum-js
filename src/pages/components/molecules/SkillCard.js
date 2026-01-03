const SkillCard = (name, icon, color, classes) => {
  return `
    <div class="bar">
        <i class="bx ${icon}" style="color:${color}"></i>
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