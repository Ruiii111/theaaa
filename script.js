const text = "Before the year ends, I wanted to send you my answer to clear things before it ends. I've been thinking about everything, and I hope we find peace and happiness in the year ahead.";
const typingParagraph = document.getElementById('typingParagraph');
const gifModal = document.getElementById("gifModal");
const closeModal = document.getElementById("closeModal");

let index = 0;

// Typing effect function
function type() {
    if (index < text.length) {
        typingParagraph.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Typing speed
    }
}

type(); // Start typing effect

// Teleport button functionality
function teleportButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Show modal on decline button click
document.getElementById('teleportButton').addEventListener('click', function() {
    gifModal.style.display = "flex"; // Show the modal
    teleportButton(this); // Keep the teleport functionality
});

// Close modal when close button is clicked
closeModal.addEventListener('click', function() {
    gifModal.style.display = "none"; // Hide the modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === gifModal) {
        gifModal.style.display = "none"; // Hide the modal
    }
});