(function () {
    const headerMarkup = `
        <div class="header">
            <h1 class="name">LAUREN YU</h1>
            <h1 class="scribble">LAUREN YU</h1>

            <nav class="navigation" aria-label="Main navigation">
                <ul>
                    <li><a href="index.html">projects</a></li>
                    <li><a href="about.html">about</a></li>
                </ul>
            </nav>
        </div>
        <div class="header-rectangle"></div>
    `;
    // TODO: Add <li><a href="designs.html">designs</a></li>

    const footerMarkup = `
        <footer>
            <p id="thanks">
                <a href="https://www.linkedin.com/in/laurenyuu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>/</span>
                <a href="https://github.com/laurennyu" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <p id="signature">Lauren Yu, 2026</p>
        </footer>
    `;

    const headerTarget = document.querySelector('#site-header');
    const footerTarget = document.querySelector('#site-footer');

    if (headerTarget) headerTarget.innerHTML = headerMarkup;
    if (footerTarget) footerTarget.innerHTML = footerMarkup;
})();
