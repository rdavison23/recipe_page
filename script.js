let myDiv = document.getElementById("ingredients");
let myList = document.getElementById("ingredientsList")

let label= document.createElement("label");
label.htmlfor ="id";
label.appendChild(
    document.createTextNode("This creates the lable for checkbox"));
// myDiv.appendChild(checkbox);
// myDiv.appendChild(checkbox);
myDiv.appendChild(label);

for (const child of myList.children) {
    console.log(child)
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.name="name";
    checkbox.value ="value";
    checkbox.id ="id";
    checkbox.classList.add("bigCheckbox")
    child.prepend(checkbox)
}