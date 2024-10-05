// Bird class to hold bird info
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

    // Return HTML with bird name and image
    getSection() {
        return `
            <div class="bird-card w3-card" onclick="showBird('${this.name}')">
                <img src="${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </div>
        `;
    }

    // Return full details for the modal
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

    // Array of bird objects with details
const birds = [
        new Bird('Peregrine Falcon', '15-20 inches', '10-15 years', 'Small birds', 'Cliffs, urban areas', 'Fastest animal in the world', 'images/falcon.jpg'),
        new Bird('Bald Eagle', '28-40 inches', '20-30 years', 'Fish', 'Near large bodies of water', 'National bird of the USA', 'images/eagle.jpg'),
        new Bird('Peacock', '35-50 inches', '15-20 years', 'Seeds, insects', 'Forests', 'Known for their beautiful feathers', 'images/peacock.jpg'),
        new Bird('Flamingo', '39-59 inches', '20-30 years', 'Algae, crustaceans', 'Lakes, lagoons', 'Known for their pink color', 'images/flamingo.jpg')
    ];
    
    // Function adding bird info to page
function loadBirds() {
    const container = document.getElementById('bird-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });
}

    // When a bird is clicked, show detailed info in modal
function showBird(name) {
    const bird = birds.find(b => b.name === name);
    document.getElementById('modalTitle').textContent = bird.name;
    document.getElementById('modalContent').innerHTML = bird.getExpandedSection();
    document.getElementById('birdModal').style.display = 'block';
}

    // Loads bird cards when page is set
document.addEventListener('DOMContentLoaded', loadBirds);