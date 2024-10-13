document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const classCounter = {
                "Yoga": 0,
                "Pilates": 0,
                "Running": 0,
                "Cycling": 0,
                "Zumba": 0,
                "Body Pump": 0
            };

            // **Preview Button Logic**
            document.querySelectorAll('.preview-btn, .preview-btn1').forEach((button) => {
                button.addEventListener('click', function() {
                    const className = this.closest('section').querySelector('h2').innerText.trim();
                    classCounter[className]++;

                    const classInfo = data.filter(item => item.class_name === className)[classCounter[className] - 1];

                    if (this.textContent === 'Unpreview') {
                        // Unpreview logic: remove class details
                        const classDetails = this.parentElement.querySelector('.class-details');
                        if (classDetails) {
                            classDetails.remove();
                        }
                        this.textContent = 'Preview';
                    } else {
                        // Preview logic: show class details
                        if (classInfo) {
                            const classDetails = `
                                <div class="class-details">
                                    <h2>${classInfo.class_name}</h2>
                                    <p>Confirmation Number: ${classInfo.confirmation_number}</p>
                                    <p>Instructor Level: ${classInfo.instructor_level}</p>
                                    <p>Availability: ${classInfo.availability}</p>
                                    <p>Location: ${classInfo.location}</p>
                                    <p>Extra Info: ${classInfo.extra_info.join(', ')}</p>
                                    <img src="images/${classInfo.img_name}" alt="${classInfo.class_name}">
                                </div>
                            `;
                            const classSection = document.createElement('div');
                            classSection.innerHTML = classDetails;
                            this.parentElement.appendChild(classSection);

                            this.textContent = 'Unpreview';
                        }
                    }
                });
            });

            // **Book Now Button Logic**
            document.querySelectorAll('.book-btn').forEach((button) => {
                button.addEventListener('click', function() {
                    const className = this.closest('section').querySelector('h2').innerText.trim();
                    classCounter[className]++;

                    const classInfo = data.filter(item => item.class_name === className)[classCounter[className] - 1];

                    if (this.textContent === 'Booked') {
                        // Unbook logic: revert back to "Book Now"
                        this.textContent = 'Book Now';
                        this.classList.remove('booked');
                    } else {
                        // Book logic: mark as "Booked"
                        if (classInfo) {
                            this.textContent = 'Booked';
                            this.classList.add('booked');
                        }
                    }
                });
            });
        })
        .catch(error => console.error('Error loading class data:', error));
});