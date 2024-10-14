document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // preview button functionality
            document.querySelectorAll('.preview-btn, .preview-btn1').forEach((button, index) => {
                button.addEventListener('click', function() {
                    // get class info from JSON from button index
                    const classInfo = data[index];

                    if (this.textContent === 'Unpreview') {
                        // removes class details if already previewed
                        const classDetails = this.parentElement.querySelector('.class-details');
                        if (classDetails) {
                            classDetails.remove();
                        }
                        this.textContent = 'Preview';
                    } else {
                        // show class details
                        if (classInfo) {
                            const classDetails = `
                                <div class="class-details">
                                    <h2>${classInfo.class_name}</h2>
                                    <p>Confirmation Number: ${classInfo.confirmation_number}</p>
                                    <p>Instructor Level: ${classInfo.instructor_level}</p>
                                    <p>Availability: ${classInfo.availability}</p>
                                    <p>Location: ${classInfo.location}</p>
                                    <p>Extra Info: ${classInfo.extra_info.join(', ')}</p>
                                    <img src="images/${classInfo.img_name}" alt="${classInfo.class_name}" style="width:150px;height:auto;">
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

            // Book Now button functionality
            document.querySelectorAll('.book-btn').forEach((button, index) => {
                button.addEventListener('click', function() {
                    // get class info from JSON from button index
                    const classInfo = data[index];

                    if (this.textContent === 'Booked') {
                        // revert back to "Book Now"
                        this.textContent = 'Book Now';
                        this.classList.remove('booked');
                    } else {
                         // mark as "Booked"
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

// Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const smallNav = document.querySelector(".small-nav");

    // toggle small nav showing when hamburger is clicked
    hamburger.addEventListener("click", () => {
        smallNav.classList.toggle("open");
    });
});