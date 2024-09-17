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

function changeBorderColor(color) {
    const buttons = document.querySelectorAll('.item-1 .social-button');

    // Change the border color of all buttons in item-1
    buttons.forEach(button => {
        button.style.borderColor = color;
    });
}


function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}

function updateContent() {
    var mobNoneElements = document.querySelectorAll('.item-3 .mob-none');
    if (window.innerWidth <= 900) {
        mobNoneElements.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        mobNoneElements.forEach(function(element) {
            element.style.display = 'list-item';
        });
    }
}

// Run on page load
updateContent();

// Run on window resize
window.addEventListener('resize', updateContent);
