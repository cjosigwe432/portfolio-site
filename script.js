// AOS init
AOS.init();

// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// Typing Effect
const text = ["Web Developer", "Frontend Developer", "Freelancer"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];
    
    if (isDeleting) {
        document.getElementById("typing").textContent =
        currentText.substring(0, j--);
    } else {
        document.getElementById("typing").textContent =
        currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll button
function scrollToProjects() {
    document.getElementById("projects")
    .scrollIntoView({ behavior: "smooth" });
}
