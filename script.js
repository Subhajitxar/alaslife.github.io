// Text to be animated
const text = "life";

// Delay between typing each character and erasing (in milliseconds)
const typingSpeed = 500;

// Find the element where animation will be applied
const animatedText = document.getElementById('animatedText');

// Function to animate typing effect
function typeWriter(text, i) {
  if (i < text.length) {
    animatedText.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), typingSpeed);
  } else {
    setTimeout(() => eraseText(text), typingSpeed * 2); // Wait before erasing
  }
}

// Function to erase text
function eraseText(text) {
  const currentText = animatedText.innerHTML;
  if (currentText.length > 0) {
    animatedText.innerHTML = currentText.substring(0, currentText.length - 1);
    setTimeout(() => eraseText(text), typingSpeed / 2);
  } else {
    setTimeout(() => typeWriter(text, 0), typingSpeed / 2); // Start typing again
  }
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
  typeWriter(text, 0);
});
