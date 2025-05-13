// Interactive particle effect
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelector('.particles');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
        rgba(52, 152, 219, 0.1) 0%, 
        rgba(52, 152, 219, 0) 50%)`;
});

// Element card hover effects
document.querySelectorAll('.element-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
}); 