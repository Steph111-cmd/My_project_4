document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      messageBox.textContent = "⚠️ Please fill out all fields.";
      messageBox.style.color = "red";
      return;
    }

    messageBox.textContent = "✅ Message sent successfully! I’ll get back to you soon.";
    messageBox.style.color = "#38f26d";

    form.reset();

    setTimeout(() => {
      messageBox.textContent = "";
    }, 3000);
  });
});
