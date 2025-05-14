// Main Landing Page JavaScript
import './common.js';

// Parallax Effect for Hero Section
function initParallax() {
    const heroSection = document.querySelector('.neon-hero');
    const coverImage = document.querySelector('.cover-image');
    if (!heroSection || !coverImage) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        coverImage.style.transform = `scale(1.1) translateY(${rate}px)`;
    });
}

// Newsletter Form Handling
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const submitButton = form?.querySelector('input[type="submit"]');
    const feedbackDiv = document.getElementById('newsletter-feedback');
    
    console.log('Newsletter form elements:', { form, emailInput, submitButton, feedbackDiv });
    
    if (!form || !emailInput || !submitButton || !feedbackDiv) {
        console.error('Newsletter form elements not found');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.value = 'SUBSCRIBING...';

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            feedbackDiv.className = 'form-feedback success';
            feedbackDiv.textContent = 'Successfully subscribed! Please check your email to confirm your subscription.';
            feedbackDiv.style.display = 'block';
            console.log('Success message shown');

            // Reset form
            form.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.value = 'SUBSCRIBE';
                feedbackDiv.style.display = 'none';
                console.log('Form reset');
            }, 3000);
        } catch (error) {
            console.error('Subscription error:', error);
            // Show error message
            feedbackDiv.className = 'form-feedback error';
            feedbackDiv.textContent = 'Failed to subscribe. Please try again.';
            feedbackDiv.style.display = 'block';

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.value = 'SUBSCRIBE';
                feedbackDiv.style.display = 'none';
            }, 3000);
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', () => {
        if (!emailInput.validity.valid) {
            feedbackDiv.className = 'form-feedback error';
            feedbackDiv.textContent = 'Please enter a valid email address.';
            feedbackDiv.style.display = 'block';
        } else {
            feedbackDiv.style.display = 'none';
        }
    });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    initParallax();
    initNewsletterForm();
}); 