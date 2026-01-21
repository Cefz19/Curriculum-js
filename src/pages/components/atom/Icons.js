const Icons = ({ link, style, icon }) => {
    return `
        <a href="${link}" style="${style}" target="_blank" rel="noopener noreferrer">
            <i class='bx ${icon}'></i>
        </a>
    `;
}

export default Icons;