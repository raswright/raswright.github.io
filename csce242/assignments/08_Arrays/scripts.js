document.addEventListener('DOMContentLoaded', () => {
    const imagesArray = [
        { src: "/csce242/assignments/08_Arrays/images/rain.jpg", title: "Rain", description: "Time to bring your umbrella!" },
        { src: "/csce242/assignments/08_Arrays/images/read.jpg", title: "Read", description: "Stay studious with a good book!" },
        // Add more images here
    ];

    const imageGrid = document.querySelector('.image-grid');
    const titleElement = document.getElementById('image-title');
    const descriptionElement = document.getElementById('image-description');

    // Loop through the array and display the images
    imagesArray.forEach((image) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.setAttribute('data-title', image.title);
        img.setAttribute('data-description', image.description);

        img.addEventListener('click', () => {
            titleElement.textContent = image.title;
            descriptionElement.textContent = image.description;
        });

        imageContainer.appendChild(img);
        imageGrid.appendChild(imageContainer);
    });
});
