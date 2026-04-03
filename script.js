// Toggle mobile menu
function toggleMenu() {
    const navUl = document.querySelector('.nav-ul');
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll to next section step by step
function scrollToNextSection() {
    const sections = ['hero', 'about', 'domains', 'director', 'conditions', 'cta'];
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // Find current section based on scroll position
    let currentIdx = 0;
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
            const sectionTop = section.offsetTop;
            if (scrollTop >= sectionTop - windowHeight / 2) {
                currentIdx = i;
            }
        }
    }

    // Scroll to next section
    const nextIdx = currentIdx + 1;
    if (nextIdx < sections.length) {
        const nextSection = document.getElementById(sections[nextIdx]);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Reveal on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.rv');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('on');
        }
    });
}

// Modal functions
function openModal() {
    const modal = document.getElementById('form-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    const modal = document.getElementById('form-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Position hand pointer to point at S'inscrire button
    const hand = document.getElementById('hand-pointer');
    const btnWrap = document.getElementById('btn-inscrire-wrap');
    const heroBtn = document.getElementById('btn-hero-inscrire');

    function positionHand() {
        if (!hand) return;
        const isMobile = window.innerWidth <= 900;
        const target = isMobile ? heroBtn : btnWrap;

        if (target) {
            const rect = target.getBoundingClientRect();
            hand.style.left = (rect.left + rect.width / 2 - 26) + 'px';
            hand.style.top = (rect.bottom + 2) + 'px';
        }
    }

    positionHand();
    window.addEventListener('resize', positionHand);
    window.addEventListener('scroll', positionHand);
});
