const projectsContainer = document.querySelector('#projects-list');

function appendTextElement(parent, tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'proj';

    const heading = document.createElement('h3');
    if (project.link) {
        const link = document.createElement('a');
        link.className = 'h3-link';
        link.href = project.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = project.title;
        heading.appendChild(link);
    } else {
        heading.textContent = project.title;
    }

    if (Array.isArray(project.technologies) && project.technologies.length) {
        const technologies = document.createElement('span');
        technologies.className = 'technologies';
        technologies.append(' | ');
        const emphasis = document.createElement('em');
        emphasis.textContent = project.technologies.join(', ');
        technologies.appendChild(emphasis);
        heading.appendChild(technologies);
    }
    card.appendChild(heading);

    if (project.dates) appendTextElement(card, 'p', 'dates', project.dates);
    if (project.description) appendTextElement(card, 'p', 'proj-description', project.description);

    if (project.image && project.image.src) {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'photo-center-block';
        const image = document.createElement('img');
        image.className = 'photo-project';
        image.src = project.image.src;
        image.alt = project.image.alt || project.title;
        image.loading = 'lazy';
        imageWrapper.appendChild(image);
        card.appendChild(imageWrapper);
    }

    return card;
}

async function renderProjects() {
    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error(`Unable to load projects (${response.status})`);

        const { projects } = await response.json();
        if (!Array.isArray(projects)) throw new Error('Project data must include a projects array.');

        const fragment = document.createDocumentFragment();
        projects.forEach((project) => fragment.appendChild(createProjectCard(project)));
        projectsContainer.replaceChildren(fragment);
    } catch (error) {
        console.error(error);
        projectsContainer.textContent = 'Projects could not be loaded. Please run the site through a local web server.';
        projectsContainer.classList.add('projects-error');
    }
}

renderProjects();
