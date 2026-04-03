// Toggle mobile menu
function toggleMenu() {
    const navUl = document.querySelector('.nav-ul');
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
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

    // Scroll hint button visibility
    const scrollBtn = document.querySelector('.scroll-hint-btn');
    if (scrollBtn) {
        function toggleScrollBtn() {
            if (window.scrollY > 120) {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.pointerEvents = 'none';
            } else {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.pointerEvents = 'auto';
            }
        }
        toggleScrollBtn();
        window.addEventListener('scroll', toggleScrollBtn);
    }
});
