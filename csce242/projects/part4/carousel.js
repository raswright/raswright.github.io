let currentItem = 0;
const items = document.querySelectorAll('.carousel-item');

setInterval(() => {
    items[currentItem].style.display = 'none'; // hides the current item
    currentItem = (currentItem + 1) % items.length; // moves to the next
    items[currentItem].style.display = 'block'; // shows next item
}, 3000); // switches every 3 seconds