document.getElementById("registerForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // no refresh

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        clearErrors();

        let isValid = true;

        if (name === "") {
            showError("nameError", "Name field is empty.");
            isValid = false;
        }
        if (email === "") {
            showError("emailError", "Enter a valid email.");
            isValid = false;
        }
        if (password.length < 6) {
            showError("passwordError", "Password must be at least 6 characters long.");
            isValid = false;
        }
        if (password !== confirmPassword) {
            showError("confirmPasswordError", "Passwords do not match.");
            isValid = false;
        }

        if(isValid) alert("Form submitted successfully!");
    });

    function showError(id, message) {
        document.getElementById(id).innerText = message;
    }

    function clearErrors() {
        let errors = document.querySelectorAll(".error");
        errors.forEach(error => error.innerText = "");
    }