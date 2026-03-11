// ===== Mobile Menu Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Scroll Reveal =====
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to target elements
    const targets = document.querySelectorAll(
        '.about-text, .about-info-cards, .info-card, .timeline-entry, .skill-card, .project-card, .contact-card, .hero-stats'
    );
    targets.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.06}s`;
    });

    // Initial check
    revealOnScroll();

    // Animate skill bars after a short delay
    setTimeout(animateSkillBars, 600);
});

window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkillBars();
});

// ===== Skill Bars Animation =====
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');
    bars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = level + '%';
        }
    });
}

// ===== Smooth active link highlighting =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(item => {
        item.style.color = '';
        item.style.background = '';
        if (item.getAttribute('href') === '#' + current) {
            item.style.color = '#1e3a5f';
            item.style.background = 'rgba(30, 58, 95, 0.08)';
        }
    });
});
