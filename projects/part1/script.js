// Form validation for Contact page
function validateForm() {
    let name = document.forms["contactForm"]["name"].value.trim();
    let email = document.forms["contactForm"]["email"].value.trim();
    let message = document.forms["contactForm"]["message"].value.trim();
    
    // Basic check for empty fields
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    
    // Email format validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    return true;
}

// Event listener for form submission
document.getElementById("contactForm").onsubmit = function() {
    return validateForm();
};