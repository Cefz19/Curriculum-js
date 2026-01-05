const ProjectsCard = (src, alt, title, description, icon) => {
    return `
        <div class="row">
            <img src="${src}" alt="${alt}">
            <div class="layer">
                <h5>${title}</h5>
                <p>${description}</p>
                <a href="#"><i class='bx ${icon}'></i></a>
            </div>
        </div>
    `;
}

export default ProjectsCard;