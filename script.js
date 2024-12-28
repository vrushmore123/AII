// Combined script.js

// Text typing effect
const textElement = document.getElementById("dynamic-text");

const texts = [
  "AI THAT MAKES BUSINESS EASY",
  "CONNECT WITH AII VENTURES"
];

let index = 0;
let charIndex = 0;
let isErasing = false;
let delay = 200;

function typeEffect() {
  const currentText = texts[index];
  if (isErasing) {
    textElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isErasing = false;
      index = (index + 1) % texts.length;
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex === currentText.length) {
      isErasing = true;
      delay = 1000; // Wait before erasing
    }
  }
  setTimeout(typeEffect, delay);
  delay = isErasing ? 50 : 100; // Faster when erasing
}

// IntersectionObserver for scroll-based animations
document.addEventListener("DOMContentLoaded", function() {
    // Start the type effect
    typeEffect();

    // Create the IntersectionObserver for scroll-based animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in view, add the class to trigger animation
                entry.target.classList.add("in-view");
            } else {
                // When it's out of view, remove the class
                entry.target.classList.remove("in-view");
            }
        });
    }, { threshold: 0.5 });

    // Target all elements with the class 'isScrollView'
    const scrollElements = document.querySelectorAll(".isScrollView");

    // Start observing each of the scroll elements
    scrollElements.forEach(element => {
        observer.observe(element);
    });
});


document.querySelectorAll('.solution-card').forEach((card) => {
  const background = card.getAttribute('data-background');
  if (background) {
    card.style.backgroundImage = `url(${background})`;
  }
});
