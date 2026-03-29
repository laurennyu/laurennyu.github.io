class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        if (name === 'title') {
            this.title = newValue;
        } else if (name === 'description') {
            this.description = newValue;
        }
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .project-card {
                    background: #353949;
                    border-radius: 8px;
                    padding: 20px;

                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: transform 0.2s;
                }
                .project-card:hover {
                    transform: scale(1.05);
                }
                .project-title {
                    font-size: 24px;
                    color: #D0B2F5;
                    margin-bottom: 10px;
                }
                .project-description {
                    color: #FFFFFF;
                }
            </style>
            <div class="project-card">
                <div class="project-title">${this.title}</div>
                <div class="project-description">${this.description}</div>
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);
export default ProjectCard;