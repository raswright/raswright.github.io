// Slideshow functionality for the Home page
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Form validation for the Contact page
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

// Event listener for form submission
document.getElementById("contactForm").onsubmit = function() {
    return validateForm();
};