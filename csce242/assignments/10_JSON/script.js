document.addEventListener('DOMContentLoaded', async () => {
    const iceCreamContainer = document.getElementById('ice-cream-container');
    
    // fetch JSON file data
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreams = await response.json();

    //go through each ice cream and create HTML elements for display
    iceCreams.forEach(iceCream => {
        const card = document.createElement('div');
        card.classList.add('ice-cream-card');
        
        //ice cream image
        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        img.alt = iceCream.name;
        
        //Ice cream name overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerText = iceCream.name;
        
        card.appendChild(img);
        card.appendChild(overlay);
        iceCreamContainer.appendChild(card);
    });
});