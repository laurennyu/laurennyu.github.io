// This file contains the main JavaScript logic for the website, including event listeners and initialization code for components.
console.log('scripts/main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed. Initializing components and loading data.');
    // // Initialize components
    // const header = document.querySelector('site-header');
    // const footer = document.querySelector('site-footer');

    // Load project data (handle { projects: [...] } or raw array)
    fetch('./data/projects.json')
      .then(response => {
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        return response.json();
      })
      .then(data => {
        const list = Array.isArray(data) ? data : (data.projects || []);
        console.log('Loaded projects:', list);
        if (!list.length) return console.warn('No projects found in JSON');

        // Prefer explicit project-list container, fallback to #projects
        const container = document.getElementById('project-list') || document.getElementById('projects');
        console.log('Project container found:', container);
        if (!container) return console.error('No project container found (#project-list or #projects)');

        const grid = document.createElement('div');
        grid.className = 'cards';

        list.forEach(project => {
          const projectCard = document.createElement('project-card');
          if (project.title) projectCard.setAttribute('title', project.title);
          if (project.description) projectCard.setAttribute('description', project.description);
          if (project.image) projectCard.setAttribute('image', project.image);
          if (project.link) projectCard.setAttribute('link', project.link);
          if (project.technologies) projectCard.setAttribute('data-tech', JSON.stringify(project.technologies));
          grid.appendChild(projectCard);
        });

        container.innerHTML = '';
        container.appendChild(grid);
      })
      .catch(error => console.error('Error loading project data:', error));

    // Add any additional event listeners or initialization logic here
});