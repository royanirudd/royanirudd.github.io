// Theme toggle functionality
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

// Modal functionality
const modal5 = document.getElementById("modal-5");
const modal8 = document.getElementById("modal-8");
const item5 = document.getElementById("item-5");
const item8 = document.getElementById("item-8");
const closeButtons = document.getElementsByClassName("close");


themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});

// Change border color of social buttons
function changeBorderColor(color) {
    const buttons = document.querySelectorAll('.item-1 .social-button');

    buttons.forEach(button => {
        button.style.borderColor = color;
    });
}

// Toggle dark/light mode
function toggleMode() {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}

// Update visibility of mobile-only elements
function updateContentSmall() {
    const mobNoneElements = document.querySelectorAll('.item-3 .mob-none');
    const displayStyle = window.innerWidth <= 900 ? 'none' : 'list-item';
    mobNoneElements.forEach(element => {
        element.style.display = displayStyle;
    });
}

// Update project list visibility based on screen size
function updateContentMedium() {
    const list = document.getElementById('projectList');
    if (list) {
        list.style.display = window.innerWidth <= 1200 ? 'none' : 'block';
    }
}

// Run on page load
updateContentMedium();
updateContentSmall();

// Run on window resize
window.addEventListener('resize', () => {
    updateContentMedium();
    updateContentSmall();
});
