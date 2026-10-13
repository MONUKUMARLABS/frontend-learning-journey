const form = document.getElementById("jobForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const skillsInput = document.getElementById("skills");
const experienceInput = document.getElementById("experience");
const portfolioInput = document.getElementById("portfolio");

const error = document.getElementById("error");
const success = document.getElementById("success");
const applicationDetails =
    document.getElementById("applicationDetails");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input values
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const age = Number(ageInput.value);
    const skills = skillsInput.value.trim();
    const experience = Number(experienceInput.value);
    const portfolio = portfolioInput.value.trim();

    // Clear previous messages
    error.textContent = "";
    success.textContent = "";
    applicationDetails.textContent = "";

    // Validate full name
    if (fullName === "") {
        error.textContent = "Full name is required";
        return;
    }

    // Validate email
    if (!email.includes("@")) {
        error.textContent = "Please enter a valid email";
        return;
    }

    // Validate phone number
    if (phone.length < 10) {
        error.textContent =
            "Please enter a valid phone number";
        return;
    }

    // Validate age
    if (age < 18) {
        error.textContent =
            "You must be 18 or older to apply";
        return;
    }

    // Validate skills
    if (skills === "") {
        error.textContent =
            "Please enter at least one skill";
        return;
    }

    // Validate experience
    if (experience < 0) {
        error.textContent =
            "Experience cannot be negative";
        return;
    }

    // Validate portfolio URL
    if (!portfolio.startsWith("http")) {
        error.textContent =
            "Please enter a valid URL starting with http";
        return;
    }

    // Show success message
    success.textContent =
        "Your job application was submitted successfully!";

    // Show submitted details
    applicationDetails.textContent =
        `Submitted Application

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Age: ${age}
Skills: ${skills}
Experience: ${experience} years
Resume / Portfolio: ${portfolio}`;
});