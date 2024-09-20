document.addEventListener("DOMContentLoaded", () => {
    const exercise1Btn = document.getElementById("exercise1");
    const exercise2Btn = document.getElementById("exercise2");
    const colorSliderSection = document.getElementById("color-slider");
    const pictureChooserSection = document.getElementById("picture-chooser");
    const sliderMessage = document.getElementById("sliderMessage");
    const rangeSlider = document.getElementById("colorRange");
    const chosenImage = document.getElementById("chosenImage");
    const pictureButtons = document.querySelectorAll(".picture-button");
    const toggleArrow = document.getElementById("toggle-arrow");
    const navList = document.getElementById("nav-list");

    // Color Texts 
    rangeSlider.addEventListener("input", () => {
        const redValue = rangeSlider.value;
        colorSliderSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    
        sliderMessage.classList.remove("chill", "warm", "hot");

        if (redValue < 85) {
            sliderMessage.textContent = "Chill";
            sliderMessage.classList.add("chill"); 
        } else if (redValue < 170) {
            sliderMessage.textContent = "Warm";
            sliderMessage.classList.add("warm"); 
        } else {
            sliderMessage.textContent = "Hot!";
            sliderMessage.classList.add("hot"); 
        }
    });

    // Toggle Menu
    toggleArrow.addEventListener("click", () => {
        if (navList.style.display === "flex") {
            navList.style.display = "none";
            toggleArrow.textContent = "▼";
        } else {
            navList.style.display = "flex";
            toggleArrow.textContent = "▲";
        }
    });
    
    // Exercise 1 Button
    exercise1Btn.addEventListener("click", () => {
        colorSliderSection.style.display = "block";
        pictureChooserSection.style.display = "none";
    });

    // Exercise 2 Button
    exercise2Btn.addEventListener("click", () => {
        colorSliderSection.style.display = "none";
        pictureChooserSection.style.display = "block";
    });

    // Picture Chooser Functionality
    pictureButtons.forEach(button => {
        button.addEventListener("click", () => {
            const size = button.getAttribute("data-size");
            chosenImage.src = `https://picsum.photos/${size}`;
            chosenImage.style.display = "block";
        });
    });
});