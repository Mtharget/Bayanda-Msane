    // < !--JavaScript for Scroll Effect-- >
   
   
   
// script.js
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// aos
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once
    offset: 120, // Offset (in px) from the original trigger point
});

function validateForm() {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Get error elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';

    // Validate name
    if (name.value.trim() === '') {
        nameError.textContent = 'Full Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate subject
    if (subject.value.trim() === '') {
        subjectError.textContent = 'Subject is required.';
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}