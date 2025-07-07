document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a server
        // using fetch() or XMLHttpRequest.
        console.log('Form submitted!');
        formSuccess.style.display = 'block';
        contactForm.reset();

        // Hide success message after a few seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    });
});