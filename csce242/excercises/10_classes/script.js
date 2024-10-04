class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");
        return section;
    }
}

// create a header
const h3= document.createElement("h3");
h3.innerHTML = this.title;
section.append(h3);

//create columns
const columnsDiv = document.createElement("div");
columnsDiv.classList.add("columns");
section.append(columnsDiv);
const firstColumnn = document.createElement("div");
columnsDiv.append(firstColumnn);
const secondColumn = document.createElement("div");
columnsDiv.append(secondColumn);

// create image/add first column
firstColumnn.append (thispicture(this.pic));
// create info data and add to second column
secondColumn.append(this.paragraph)("Breed", this.breed);
secondColumn.append(this.paragraph)("Age, this.age");


picture(info) {
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    return pic;
} 
    

get item(){
    return section;
}


paragraph(title,info) {
    const p= document.createElement("p");
    p.innerHTML = <strong>$(title)</strong> $(info);
    return p;
}



const dogs = [];
//const myDoc = new Dog("molly", "pit bull", "brown", 4, "xs", "images/molly.jpg");
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});