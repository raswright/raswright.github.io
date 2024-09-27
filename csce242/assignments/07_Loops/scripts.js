document.getElementById('draw').addEventListener('click', () => {
    const numberOfStars = document.getElementById('stars').value;
    const canvas = document.getElementById('canvas');
    const error = document.getElementById('error');
    const starMessage = document.getElementById('starMessage');

    // removes previous content
    canvas.innerHTML = '';
    starMessage.classList.add('hidden');
    
    if (numberOfStars <= 0) {
        error.classList.remove('hidden');
    } else {
        error.classList.add('hidden');
        const canvasWidth = canvas.offsetWidth - 20;
        const canvasHeight = canvas.offsetHeight - 20;

        // draw the stars
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = Math.random() * canvasHeight + 'px';
            star.style.left = Math.random() * canvasWidth + 'px';
            star.dataset.number = i + 1;
        
            star.addEventListener('click', () => {
                starMessage.innerHTML = 'You clicked on star #' + star.dataset.number;
                starMessage.classList.remove('hidden');
            });
        
            canvas.appendChild(star);
        }
    }
});