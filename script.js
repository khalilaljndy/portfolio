// Portfolio data: update these values to change the content without editing markup.
const portfolioData = {
  name: 'Khalil Aljndy',
  title: 'Frontend Developer',
  personalStatement: 'Building clean, responsive, and user-focused web experiences.',
  email: 'khalilaljndy1@gmail.com',
  phone: '+963930564090',
  github: 'https://github.com/khalilaljndy',
  linkedin: 'https://www.linkedin.com/in/khalil-al-jndy-bb579a406',
  khamsat: 'https://khamsat.com/user/khalilaljndy',
  mostaql: 'https://mostaql.com/u/khalilaljndy',
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Web Design',
    'Git',
    'GitHub'
  ],
  projects: [
    {
      name: 'Writeflow ai landing page',
      description: 'A modern and responsive landing page for an AI writing assistant',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
      image: 'assets/projects/writeflow-hero.png',
      liveDemo: 'https://khalilaljndy.github.io/weather-dashboard/',
      github: 'https://github.com/khalilaljndy/writeflow-ai-landing-page'
    },
    {
      name: 'Doctor Clinic Website',
      description: 'Fictional Front-End Portfolio Project, A modern, responsive doctor clinic website',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: 'assets/projects/doctor-clinic-hero.png',
      liveDemo: 'https://khalilaljndy.github.io/doctor-clinic-website/',
      github: 'https://github.com/khalilaljndy/doctor-clinic-website'
    },
    {
      name: 'Responsive Weather Dashboard',
      description:
        'A modern responsive weather dashboard that provides real-time weather information for cities. The application is optimized for both desktop and mobile screens and focuses on a clean, simple, user-friendly experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Open-Meteo API', 'Geolocation API', 'Local Storage'],
      image: 'assets/projects/weather-dashboard-hero.png',
      liveDemo: 'https://khalilaljndy.github.io/weather-dashboard/',
      github: 'https://github.com/khalilaljndy/weather-dashboard'
    }
  ]
};

const setTextContent = (selector, value) => {
  const target = document.querySelector(selector);
  if (target) target.textContent = value;
};

const populateProfile = () => {
  document.querySelectorAll('[data-name]').forEach((node) => {
    node.textContent = portfolioData.name;
  });

  setTextContent('#hero-statement', portfolioData.personalStatement);

  const githubLink = document.querySelector('.button-ghost[href*="github"]');
  if (githubLink) githubLink.href = portfolioData.github;

  const linkedinLink = document.querySelector('.button-ghost[href*="linkedin"]');
  if (linkedinLink) linkedinLink.href = portfolioData.linkedin;
};

const renderSkills = () => {
  const skillsList = document.getElementById('skills-list');
  if (!skillsList) return;

  skillsList.innerHTML = portfolioData.skills
    .map(
      (skill) => `
        <div class="skill-card" aria-label="Skill: ${skill}">${skill}</div>
      `
    )
    .join('');
};

const renderProjects = () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article class="project-card">
          <img
            class="project-image"
            src="${project.image}"
            alt="${project.name} project preview"
          />
          <div class="project-body">
            <h3 class="project-name">${project.name}</h3>
            <p class="project-description">${project.description}</p>

            <div class="tech-list" aria-label="Project technologies">
              ${project.technologies
                .map((tech) => `<span class="tech-pill">${tech}</span>`)
                .join('')}
            </div>

            <div class="project-actions">
              ${
                project.liveDemo
                  ? `<a class="primary" href="${project.liveDemo}" target="_blank" rel="noreferrer">Live Demo</a>`
                  : ''
              }
              <a class="secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
};

const renderContactCards = () => {
  const contactGrid = document.getElementById('contact-grid');
  if (!contactGrid) return;

  const contacts = [
    { label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone.replace(/\s+/g, '')}` },
    { label: 'LinkedIn', value: 'View Profile', href: portfolioData.linkedin },
    { label: 'GitHub', value: 'View Profile', href: portfolioData.github },
    { label: 'Khamsat', value: 'View Profile', href: portfolioData.khamsat },
    { label: 'Mostaql', value: 'View Profile', href: portfolioData.mostaql }
  ];

  contactGrid.innerHTML = contacts
    .map(
      (contact) => `
        <div class="contact-card">
          <span class="contact-label">${contact.label}</span>
          <span class="contact-value"><a href="${contact.href}" target="_blank" rel="noreferrer">${contact.value}</a></span>
        </div>
      `
    )
    .join('');
};

const renderFooterLinks = () => {
  const footerLinks = document.getElementById('footer-links');
  if (!footerLinks) return;

  const links = [
    { label: 'GitHub', url: portfolioData.github },
    { label: 'LinkedIn', url: portfolioData.linkedin },
    { label: 'Email', url: `mailto:${portfolioData.email}` },
    { label: 'Khamsat', url: portfolioData.khamsat },
    { label: 'Mostaql', url: portfolioData.mostaql }
  ];

  footerLinks.innerHTML = links
    .filter((link) => link.url)
    .map(
      (link) => `
        <a class="footer-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
      `
    )
    .join('');
};

const initNavigation = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  populateProfile();
  renderSkills();
  renderProjects();
  renderContactCards();
  renderFooterLinks();
  initNavigation();
});
