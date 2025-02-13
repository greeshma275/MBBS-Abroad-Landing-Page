document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let country = document.getElementById('country').value;

    if (!name || !email || !phone || country === "Select Preferred Country") {
        showAlert("Please fill all fields correctly!", "red");
        return;
    }

    showAlert("Form submitted successfully! We'll contact you soon.", "green");
});

function showAlert(message, color) {
    let alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `fixed top-10 left-1/2 transform -translate-x-1/2 bg-${color}-500 text-white px-4 py-2 rounded shadow-lg`;
    document.body.appendChild(alertBox);

    setTimeout(() => { alertBox.remove(); }, 3000);
}
function scrollToForm() {
    document.getElementById("lead-form").scrollIntoView({ behavior: "smooth" });
}
