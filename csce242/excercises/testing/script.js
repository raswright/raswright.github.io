document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            
            // Loop through the data and display each item
            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>Instructor: ${item.instructor}</p>
                    <p>Time: ${item.time}</p>
                    <img src="images/${item.img_name}" alt="${item.name}">
                    <ul>
                        ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
