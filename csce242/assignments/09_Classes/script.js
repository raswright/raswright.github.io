// bird class to hold bird info
class Bird {
    constructor(name, size, lifespan, food, habitat, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    // method to return HTML with bird name and image
    getSection() {
        return `
            <div class="bird-card w3-card" onclick="showBird('${this.name}')">
                <img src="${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </div>
        `;
    }

    // method to return full details for the modal
    getExpandedSection() {
        return `
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Lifespan:</strong> ${this.lifespan}</p>
            <p><strong>Food:</strong> ${this.food}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Interesting Fact:</strong> ${this.fact}</p>
        `;
    }
}

    // array of bird objects with the details
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar', 'Trees', 'Nicknamed "Hummers"', 'images/hummingbird.jpg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Seeds, nuts', 'Forests', 'Mimics hawks', 'images/bluejay.jpg'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Insects, fruits', 'Woodlands', 'Known for its bright red color', 'images/cardinal.jpg'),
    new Bird('Robin', '9-11 inches', '2 years', 'Worms', 'Gardens', 'Famous for their melodic songs', 'images/robin.jpg')
];

    // function to add bird info to page
function loadBirds() {
    const container = document.getElementById('bird-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });
}

    // when a bird is clicked, show detailed info in modal
function showBird(name) {
    const bird = birds.find(b => b.name === name);
    document.getElementById('modalTitle').textContent = bird.name;
    document.getElementById('modalContent').innerHTML = bird.getExpandedSection();
    document.getElementById('birdModal').style.display = 'block';
}

    // koads bird cards when page is set
document.addEventListener('DOMContentLoaded', loadBirds);