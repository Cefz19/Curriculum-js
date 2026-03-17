const ProjectsCard = ({src, alt, title, description, icon, link}) => {
    return `
        <div class="row">
            <img src="${src}" alt="${alt}" loading="lazy">
            <div class="layer">
                <h5>${title}</h5>
                <p>${description}</p>
                <a href="${link}"><i class='bx ${icon}'></i></a>
            </div>
        </div>
    `;
}

export default ProjectsCard;