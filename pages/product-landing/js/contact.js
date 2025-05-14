// Contact Page JavaScript
import './common.js';

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitButton = form?.querySelector('button[type="submit"]');
    if (!form || !submitButton) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'SENDING...';

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const feedback = document.createElement('div');
            feedback.className = 'form-feedback success';
            feedback.textContent = 'Message sent successfully! We\'ll get back to you soon.';
            form.appendChild(feedback);

            // Add success animation
            form.classList.add('form-success');

            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                feedback.remove();
                form.classList.remove('form-success');
                submitButton.disabled = false;
                submitButton.textContent = 'SEND MESSAGE';
            }, 3000);
        } catch (error) {
            // Show error message
            const feedback = document.createElement('div');
            feedback.className = 'form-feedback error';
            feedback.textContent = 'Failed to send message. Please try again.';
            form.appendChild(feedback);

            // Reset button after 3 seconds
            setTimeout(() => {
                feedback.remove();
                submitButton.disabled = false;
                submitButton.textContent = 'SEND MESSAGE';
            }, 3000);
        }
    });

    // Real-time form validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const feedback = input.parentElement.querySelector('.form-feedback');
            if (feedback) feedback.remove();

            if (!input.validity.valid) {
                const feedback = document.createElement('div');
                feedback.className = 'form-feedback error';
                feedback.textContent = input.validationMessage;
                input.parentElement.appendChild(feedback);
            }
        });
    });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
}); 