
// Hamburger Menu Toggle
document.querySelector('.burger-menu').addEventListener('click', function() {
const menu = document.getElementById('mobile-menu');
if (menu.style.display === 'block') {
menu.style.display = 'none';
} else {
menu.style.display = 'block';
}
});

window.onload = function() {
// Load the click and hover sound
var clickSound = new Audio('Media/mixkit-cool-interface-click-tone-2568.wav');
var hoverSound = new Audio('Media/mixkit-cool-interface-click-tone-2568.wav'); // You can replace with a different sound

// Get all clickable elements (links, buttons, inputs, etc.)
var clickableElements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"]');

// Add event listeners to play the sound when clicked
clickableElements.forEach(function(element) {
element.addEventListener('click', function() {
clickSound.play();
});
});

// Add event listeners to menu links to play sound on hover
var menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(function(link) {
link.addEventListener('mouseenter', function() {
hoverSound.play();
});
});
}

