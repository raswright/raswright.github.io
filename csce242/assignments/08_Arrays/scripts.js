// Make sure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const descriptions = [
        { title: "Rain", description: "I think it's time to bring your umbrella!" },
        { title: "Read", description: "Got to stay studious!" },
        { title: "Shovel", description: "Time for some outdoor activities!" },
        { title: "Work", description: "Let’s get some work done!" },
        { title: "Birthday", description: "This is a photo of me on my birthday!!!" },
        { title: "Clown", description: "Here I am dressed as a clown!" }
    ];

    // Select all image containers and add event listeners
    document.querySelectorAll('.image-container img').forEach((img, index) => {
        img.addEventListener('click', () => {
            const title = descriptions[index].title;
            const description = descriptions[index].description;

            // Update title and description
            document.getElementById('image-title').textContent = title;
            document.getElementById('image-description').textContent = description;
        });
    });
});
