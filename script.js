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
    {
      label: 'Email',
      value: portfolioData.email,
      copyValue: portfolioData.email,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2.5 5.75A2.75 2.75 0 0 1 5.25 3h13.5a2.75 2.75 0 0 1 2.75 2.75v12.5A2.75 2.75 0 0 1 18.75 21H5.25a2.75 2.75 0 0 1-2.75-2.75V5.75Zm2.75-.25a.5.5 0 0 0-.3.1L12 11.15l7.05-5.55a.5.5 0 0 0-.3-.1H5.25ZM19.5 8.13l-6.57 5.17a1.5 1.5 0 0 1-1.86 0L4.5 8.13v10.12c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75V8.13Z"/></svg>'
    },
    {
      label: 'Phone',
      value: portfolioData.phone,
      copyValue: portfolioData.phone,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 2.5h3.1l1.55 5.17-1.9 1.9a15.55 15.55 0 0 0 5.06 5.06l1.9-1.9 5.17 1.55v3.1c0 1.17-.95 2.12-2.12 2.12C10.4 19.5 4.5 13.6 4.5 6.62 4.5 5.45 5.45 4.5 6.62 4.5Z"/></svg>'
    },
    {
      label: 'LinkedIn',
      href: portfolioData.linkedin,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46Z"/></svg>'
    },
    {
      label: 'GitHub',
      href: portfolioData.github,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>'
    },
    {
      label: 'Khamsat',
      href: portfolioData.khamsat,
      iconClass: 'social-icon--khamsat',
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#f3ad2d"/><path fill="#fff" d="M7 5.5h7.7v3H10v2.1h3.4c2.3 0 3.7 1.4 3.7 3.7s-1.5 4.2-4.2 4.2H7v-3h5.6c.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-1.4-.9H7v-8Z"/></svg>'
    },
    {
      label: 'Mostaql',
      href: portfolioData.mostaql,
      iconClass: 'social-icon--mostaql',
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#2cabe3"/><circle cx="12" cy="12" r="4.8" fill="none" stroke="#fff" stroke-width="2.2"/></svg>'
    }
  ];

  contactGrid.innerHTML = contacts
    .map(
      (contact) =>
        `
          <div class="contact-card social-card">
            ${
              contact.copyValue
                ? `<span class="social-icon-link ${contact.iconClass || ''}">${contact.icon}</span>`
                : `<a class="social-icon-link ${contact.iconClass || ''}" href="${contact.href}" target="_blank" rel="noreferrer" aria-label="${contact.label}">${contact.icon}</a>`
            }
            <span class="social-name">${contact.label}</span>
            ${
              contact.value
                ? `
                  <span class="contact-value">
                    <span>${contact.value}</span>
                    <button class="copy-contact-button" type="button" data-copy-value="${contact.copyValue}" aria-label="Copy ${contact.label}">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 8V5.75A2.75 2.75 0 0 1 10.75 3h7.5A2.75 2.75 0 0 1 21 5.75v7.5A2.75 2.75 0 0 1 18.25 16H16v2.25A2.75 2.75 0 0 1 13.25 21h-7.5A2.75 2.75 0 0 1 3 18.25v-7.5A2.75 2.75 0 0 1 5.75 8H8Zm2.75-3a.75.75 0 0 0-.75.75V8h3.25A2.75 2.75 0 0 1 16 10.75V13h2.25a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-7.5ZM5.75 10a.75.75 0 0 0-.75.75v7.5c0 .41.34.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-7.5Z"/></svg>
                    </button>
                  </span>
                `
                : ''
            }
          </div>
        `
    )
    .join('');

  contactGrid.querySelectorAll('.copy-contact-button').forEach((button) => {
    button.addEventListener('click', async () => {
      await navigator.clipboard.writeText(button.dataset.copyValue);
      const label = button.getAttribute('aria-label');
      button.setAttribute('aria-label', `${label} copied`);
    });
  });
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
