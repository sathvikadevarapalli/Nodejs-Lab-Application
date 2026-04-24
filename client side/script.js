document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear old errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmError").innerText = "";
    document.getElementById("successMsg").innerText = "";

    // Name validation
    const namePattern = /^[A-Za-z ]+$/;
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    } else if (!namePattern.test(name)) {
        document.getElementById("nameError").innerText = "Only letters allowed";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Min 6 characters required";
        isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById("successMsg").innerText = "Form submitted successfully!";
        document.getElementById("myForm").reset();
    }
});