let myDiv = document.getElementById("ingredients");
let myList = document.getElementById("ingredientsList")

let label= document.createElement("label");
label.htmlfor ="id";
label.appendChild(
    document.createTextNode(""));
// myDiv.appendChild(checkbox);
// myDiv.appendChild(checkbox);
myDiv.appendChild(label);

for (const [i,child] of Array.from(myList.children).entries()) {
    console.log(i,child)
    let checkbox = document.createElement("input")
    checkbox.type= "checkbox"
    checkbox.name="ingredients";
    checkbox.id ="ingredient";
    checkbox.classList.add("bigCheckbox")
    child.prepend(checkbox)
    
}