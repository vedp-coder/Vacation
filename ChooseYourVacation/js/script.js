// Main JavaScript file for ChooseYourVacation website
// Handles common functionality across all pages

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeContactForm();
    initializeAnimations();
    loadDestinations();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    // Clear previous errors
    clearErrors();
    
    // Validate form
    let isValid = true;
    
    if (!name.value.trim()) {
        showError('nameError', 'Name is required');
        isValid = false;
    }
    
    if (!email.value.trim()) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!subject.value) {
        showError('subjectError', 'Please select a subject');
        isValid = false;
    }
    
    if (!message.value.trim()) {
        showError('messageError', 'Message is required');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        setTimeout(() => {
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        }, 500);
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Animation handling
function initializeAnimations() {
    // Add fade-in animation to cards when they come into view
    const cards = document.querySelectorAll('.card, .destination-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Destination data management
let destinationsData = [];

async function loadDestinations() {
    try {
        const response = await fetch('data/destinations.json');
        if (response.ok) {
            destinationsData = await response.json();
        } else {
            console.warn('Could not load destinations data');
            // Fallback to hardcoded data
            destinationsData = getFallbackDestinations();
        }
    } catch (error) {
        console.warn('Error loading destinations:', error);
        destinationsData = getFallbackDestinations();
    }
}

function getFallbackDestinations() {
    return [
        {
            id: 1,
            name: "Bali, Indonesia",
            country: "Indonesia
