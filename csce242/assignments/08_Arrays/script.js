document.addEventListener('DOMContentLoaded', () => {
    const descriptions = {
        "Rain": { title: "Rain", description: "Bring your umbrella when it's raining!" },
        "Read": { title: "Read", description: "Reading is good for you!" },
        "Shovel": { title: "Shovel", description: "Having a shovel for outside work is good!" },
        "Work": { title: "Work", description: "Having a computer is a good way of working!" },
        "Birthday": { title: "Birthday", description: "Everyone has a birthday!" },
        "Clown": { title: "Clown", description: "Clowns are funny!" }
    };

    // allows images to display title and description
    document.querySelectorAll('.image-container img').forEach((img) => {
        img.addEventListener('click', () => {
            const imgAlt = img.alt; 
            const descriptionData = descriptions[imgAlt];
            
            if (descriptionData) {
                document.getElementById('image-title').textContent = descriptionData.title;
                document.getElementById('image-description').textContent = descriptionData.description;
            }
        });
    });
});