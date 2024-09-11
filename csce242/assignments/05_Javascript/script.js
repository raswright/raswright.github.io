let count = 0;

function incrementCounter() {
    count += 1;
    document.getElementById("count-display").innerText = count;
}

function refreshImage() {
    // reloads image to display new one
    location.reload();
}

function moveSquare(value) {
    // slide to reposition square
    let square = document.getElementById("square");
    square.style.left = value + "%";
}