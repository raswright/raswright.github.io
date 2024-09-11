const doStuff = () =>{
    alert("Hello World")
}

const myButton = document.getElementById("btn-click");
//myButton.oneslick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};