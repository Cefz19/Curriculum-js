
const  SpinningCards = (src, title, description, details) => {
    return `
        <section class="card">
            <section class="face front">
                <img src="${src}" alt="${title}">
                <h3>${title}</h3>
            </section>
            <section class="face back">
                <p>${description}</p>
            <div class="link">
                <a href="#home">${details}</a>
            </div>
            </section> 
        </section>
    `;
}

export default SpinningCards;