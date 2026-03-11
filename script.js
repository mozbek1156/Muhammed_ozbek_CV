// ===== Mobil Menü Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Menü linkine tıklandığında menüyü kapat
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== Scroll Reveal Animasyonu =====
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
            el.classList.add('visible');
        }
    });
}

// Sayfa yüklendiğinde reveal sınıfını ekle
document.addEventListener('DOMContentLoaded', () => {
    // Tüm section ve kartlara reveal sınıfı ekle
    const targets = document.querySelectorAll(
        '.about-grid, .timeline-entry, .skill-card, .project-card, .contact-card, .info-card'
    );
    targets.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.05}s`;
    });

    // İlk kontrolü yap
    revealOnScroll();

    // Yetenek barlarını animasyonla doldur
    setTimeout(animateSkillBars, 500);
});

window.addEventListener('scroll', revealOnScroll);

// ===== Yetenek Barları Animasyonu =====
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');
    bars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = level + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);

// ===== Navbar scroll efekti =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.85)';
    }
});
