document.addEventListener('DOMContentLoaded', () => {
    const descriptions = {
        "rain": { title: "rain", description: "I think it's time to bring your umbrella!" },
        "read": { title: "read", description: "Got to stay studious!" },
        "shovel": { title: "shovel", description: "Time for some outdoor activities!" },
        "work": { title: "work", description: "Let’s get some work done!" },
        "birthday": { title: "birthday", description: "This is a photo of me on my birthday!!!" },
        "clown": { title: "clown", description: "Here I am dressed as a clown!" }
    };

    // Ensure each image is clickable and shows correct information
    document.querySelectorAll('.image-container img').forEach(img => {
        img.addEventListener('click', function () {
            const imgAlt = this.alt; // Use the alt attribute as a key
            const descriptionData = descriptions[imgAlt];

            // If description exists for the clicked image
            if (descriptionData) {
                document.getElementById('image-title').textContent = descriptionData.title;
                document.getElementById('image-description').textContent = descriptionData.description;
            }
        });
    });
});
