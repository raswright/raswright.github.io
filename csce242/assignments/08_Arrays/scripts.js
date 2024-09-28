// Associative array with image file paths and descriptions
const images = {
    "rain.jpg": {
        title: "Rain",
        description: "It's time to bring your umbrella."
    },
    "read.jpg": {
        title: "Reading",
        description: "This little figure loves books."
    },
    "shovel.jpg": {
        title: "Gardening",
        description: "Working with a shovel in the garden."
    },
    "work.jpg": {
        title: "Work",
        description: "Gotta be studious!"
    },
    "birthday.jpg": {
        title: "Party",
        description: "Let's celebrate a birthday!"
    },
    "clown.jpg": {
        title: "Clowning Around",
        description: "Having fun as a clown."
    }
};

// Function to load images
function loadImages() {
    const container = document.getElementById('imageContainer');
    for (const [src, details] of Object.entries(images)) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = details.title;
        img.classList.add('image-item');
        img.addEventListener('click', () => showDetails(details.title, details.description));
        container.appendChild(img);
    }
}

// Function to display title and description
function showDetails(title, description) {
    document.getElementById('imageTitle').textContent = title;
    document.getElementById('imageDescription').textContent = description;
}

// Load images on page load
window.onload = loadImages;

document.querySelectorAll('.image-container img').forEach((img, index) => {
    img.addEventListener('click', () => {
        const title = descriptions[index].title;
        const description = descriptions[index].text;
        document.getElementById('image-title').textContent = title;
        document.getElementById('image-description').textContent = description;
    });
});

const descriptions = [
    { title: "Birthday", text: "This is a photo of me on my birthday!" },
    { title: "Clown", text: "I dressed up as a clown!" },
    // Add the rest of your descriptions here...
];
