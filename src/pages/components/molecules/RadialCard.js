const RadialCard = (x, y, viewBox, cx, cy, r, path, percentage, text) => {
  return `
        <div class="radial-bar">
            <svg x="${x}" y="${y}" viewBox="${viewBox}">
                <circle class="progress-bar" cx="${cx}" cy="${cy}" r="${r}"></circle>
                <circle class="path ${path}" cx="${cx}" cy="${cy}" r="${r}"></circle>
            </svg>
            <div class="percentage">${percentage}</div>
            <div class="text">${text}</div>
        </div>

    `;
};

export default RadialCard;
