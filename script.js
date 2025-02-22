// Navbar Hide on Scroll
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    navbar.style.top = prevScrollPos > currentScrollPos ? "0" : "-80px";
    prevScrollPos = currentScrollPos;
});

// Reusable Typewriter Function (Infinite Loop)
const typeWriter = (elementId, text, speed = 100, delay = 1000) => {
    const element = document.getElementById(elementId);
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Wait before restarting the animation
            setTimeout(() => {
                element.textContent = "";
                index = 0;
                type();
            }, delay);
        }
    };

    type();
};

// Run Typewriter on DOM Load (Infinite Loop for both)
window.addEventListener("DOMContentLoaded", () => {
    typeWriter("typewriter-name", "Sandeep Gupta", 100, 1500);
    setTimeout(() => typeWriter("typewriter-domain", "App Developer", 100, 1500), 3000);
});

// Smooth Scroll for View Projects Button
document.getElementById("view-projects-btn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// EmailJS Integration
(function() {
    emailjs.init("_YKhefjPDboLCRWf7"); // Replace with your Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const statusMessage = document.getElementById("form-status");
    statusMessage.textContent = "Sending...";

    emailjs.sendForm("sandy123", "template_aempr08", this)
        .then(() => {
            statusMessage.textContent = "Message sent successfully!";
            this.reset();
        }, (error) => {
            statusMessage.textContent = "Failed to send message. Try again later.";
            console.error("FAILED...", error);
        });
});

