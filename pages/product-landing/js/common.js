// Common JavaScript functionality shared across all pages

// Scroll Progress Indicator
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });
}

// Glitch Effect for Logo
function initGlitchEffect() {
    const logo = document.querySelector('.logo-glitch');
    if (!logo) return;

    setInterval(() => {
        logo.style.textShadow = `
            ${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 20}px var(--neon-primary),
            ${Math.random() * -10}px ${Math.random() * -10}px ${Math.random() * 20}px var(--neon-secondary)
        `;
    }, 100);
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initGlitchEffect();
}); 