// Define a dictionary to store image names and descriptions
const descriptions = {
    image1: {
        name: "Mountain",
        description: "This is a beautiful view of a mountain range."
    },
    image2: {
        name: "Beach",
        description: "Relax at the peaceful beach during sunset."
    },
    image3: {
        name: "Forest",
        description: "A serene view of a lush green forest."
    }
};

// Function to update the description when an image is clicked
function updateDescription(imageId) {
    // Get the name and description based on the imageId
    const { name, description } = descriptions[imageId];

    // Update the text in the description area
    document.getElementById("image-name").textContent = name;
    document.getElementById("image-description").textContent = description;
}

// Attach event listeners to the images
document.getElementById("image1").addEventListener("click", () => updateDescription("image1"));
document.getElementById("image2").addEventListener("click", () => updateDescription("image2"));
document.getElementById("image3").addEventListener("click", () => updateDescription("image3"));
