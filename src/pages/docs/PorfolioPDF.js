const PorfolioPDF = (atitle, title, src) => {
    return `
        <section class="container pdf-page">
        <div class="pdf-controls">
            <a href="#home" class="btn btn-secondary">${atitle}</a>
            <button class="btn btn-primary" id="download">${title}</button>
        </div>
            <div class="card"> 
                <iframe src="${src}" width="650px" height="800px"></iframe> 
            </div>
        </section>
    `;
}

export default PorfolioPDF;
