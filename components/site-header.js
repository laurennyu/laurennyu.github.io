class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: var(--primary-color);
                    color: var(--text-color);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                }
                nav {
                    display: flex;
                    gap: 1.5rem;
                }
                nav a {
                    color: var(--text-color);
                    text-decoration: none;
                    font-weight: bold;
                }
                nav a:hover {
                    text-decoration: underline;
                }
            </style>
            <header>
                <div class="branding">
                    <h1>Lauren Yu</h1>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
export default SiteHeader;