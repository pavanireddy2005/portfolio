// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "🌙";
    } else {
        toggleBtn.textContent = "☀️";
    }
});

// Initialize EmailJS
emailjs.init("rCxFnTBnWcm42WNwY");

// Contact Form
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusMessage.textContent = "Sending...";
    statusMessage.style.color = "#3b82f6";

    emailjs.sendForm(
        "service_nt7r99c",
        "template_995uwxl",
        this
    )
    .then(() => {
        statusMessage.textContent = "✅ Message sent successfully!";
        statusMessage.style.color = "#22c55e";

        form.reset();

        setTimeout(() => {
            statusMessage.textContent = "";
        }, 5000);
    })
    .catch((error) => {
        statusMessage.textContent = "❌ Failed to send message. Please try again.";
        statusMessage.style.color = "#ef4444";

        console.error("EmailJS Error:", error);
    });
});