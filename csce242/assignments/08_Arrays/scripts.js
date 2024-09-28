document.addEventListener('DOMContentLoaded', () => {
    const descriptions = {
        "rain": { title: "Rain", description: "I think it's time to bring your umbrella!" },
        "read": { title: "Read", description: "Got to stay studious!" },
        "shovel": { title: "Shovel", description: "Time for some outdoor activities!" },
        "work": { title: "Work", description: "Let’s get some work done!" },
        "birthday": { title: "Birthday", description: "This is a photo of me on my birthday!!!" },
        "clown": { title: "Clown", description: "Here I am dressed as a clown!" }
    };

    document.querySelectorAll('.image-container img').forEach((img) => {
        img.addEventListener('click', function () {
            const imgAlt = this.alt; // Get the alt text as a key
            const title = descriptions[imgAlt].title;
            const description = descriptions[imgAlt].description;

            // Update the text content
            document.getElementById('image-title').textContent = title;
            document.getElementById('image-description').textContent = description;
        });
    });
});
