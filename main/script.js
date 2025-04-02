// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    themeIcon.innerHTML = theme === 'light' ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
    lucide.createIcons();
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Initialize skill progress bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.progress-fill');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 300);
    });
}

// Call this after the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSkillBars);

// Re-initialize skill bars when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initializeSkillBars();
        }
    });
}, { threshold: 0.5 });

// Observe the skills section
const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Certificate image modal functionality with full screen display
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Open modal when clicking on certificate images
document.querySelectorAll('.cert-image img').forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modal.classList.add('active');
        // Make the modal image fill the screen while maintaining aspect ratio
        modalImage.classList.add('fullscreen');
    });
});

// Close modal when clicking the close button
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImage.classList.remove('fullscreen');
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalImage.classList.remove('fullscreen');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modalImage.classList.remove('fullscreen');
    }
});

// Contact Form with enhanced error handling
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Get form data
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await emailjs.send("service_suyh29o", "template_sq0s4no", params);
        console.log("Email sent successfully", response);
        
        // Show success message in the contact section
        showAlert('success', 'Message sent successfully! Thank you for reaching out.');
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Failed to send email", error);
        
        // Show error message in the contact section
        showAlert('error', 'Failed to send message. Please try again later or contact directly via email.');
    } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// Alert function for showing messages in the contact section
function showAlert(type, message) {
    // Remove any existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.textContent = message;
    
    // Insert alert before the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alert, form);
    
    // Remove alert after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with initial state
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
});