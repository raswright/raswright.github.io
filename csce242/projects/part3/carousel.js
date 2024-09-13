let currentItem = 0;
const items = document.querySelectorAll('.carousel-item');

setInterval(() => {
    items[currentItem].style.display = 'none'; // Hide current item
    currentItem = (currentItem + 1) % items.length; // Move to the next
    items[currentItem].style.display = 'block'; // Show next item
}, 3000); // Switch every 3 seconds
