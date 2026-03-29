class SiteFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    color: #FFFFFF;
                    text-align: center;
                    padding: 20px 0px;
                    position: relative;
                    bottom: 0;
                    width: 100%;
                }
                a {
                    color: #D0B2F5;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
            <footer>
                <p>Lauren Yu, ${new Date().getFullYear()}.</p>
                <p>
                    <a href="https://github.com/laurennyu" target="_blank">GitHub</a> | 
                    <a href="https://www.linkedin.com/in/laurenyuu" target="_blank">LinkedIn</a>
                </p>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
export default SiteFooter;