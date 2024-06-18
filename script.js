function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!password || password.length < 8) {
        alert("Please enter a password that is at least 8 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
