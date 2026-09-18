# Lauren Yu's Portfolio

Welcome to my portfolio website! This project showcases my work as a data scientist, software developer, and designer. Below are the details regarding the structure, setup, and features of the portfolio.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **Responsive Design**: The portfolio is designed to be fully responsive, ensuring a great experience on both desktop and mobile devices.
- **Web Components**: Utilizes modern web components for the header, footer, and project cards, promoting reusability and maintainability.
- **Client-Side Routing**: Smooth navigation between sections without full page reloads, enhancing user experience.
- **SCSS Styling**: Organized styles using SCSS for better maintainability and scalability.

## Installation

To get started, clone the repository:

```bash
git clone https://github.com/laurennyu/laurennyu.github.io.git
cd laurennyu.github.io
```

## Usage

To run the project locally, use a simple HTTP server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000` in your browser. You can also use `npx live-server .` if you prefer live reloading.

The projects on the home page are loaded from [`data/projects.json`](data/projects.json). Each item needs a `title`; `technologies`, `dates`, `description`, `link`, and `image` are optional. An image uses an object with a `src` and optional `alt`, for example:

```json
{
  "title": "Example project",
  "description": "A short description.",
  "link": "https://example.com",
  "image": { "src": "assets/example.png", "alt": "Example project screenshot" }
}
```

Because browsers block JSON requests from `file://` pages, use the local server above while developing.

## Design tokens

The first block in [`style.css`](style.css) is the site-wide palette and typography system. Update a value there to change its role across the site—for example, `--color-accent` controls project-title links and hover states, while `--font-body` controls body copy and navigation. Font loading is centralized in that file too: when choosing a new Google Font, update the `@import` URL and its corresponding `--font-*` value.

## Project Structure

The project is organized as follows:

```
laurenyu-portfolio
├── src
│   ├── index.html          # Main HTML document
│   ├── components          # Web components for header, footer, and project cards
│   ├── styles              # SCSS stylesheets
│   ├── scripts             # JavaScript files for functionality
│   ├── data                # JSON data for projects
│   └── assets              # Fonts and icons
├── public
│   └── CNAME               # Custom domain configuration
├── .gitignore              # Files to ignore in Git
├── package.json            # NPM configuration
├── README.md               # Project documentation
└── LICENSE                 # Licensing information
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
