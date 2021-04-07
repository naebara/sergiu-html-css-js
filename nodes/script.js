let form = document.querySelector("#form");
let people = document.querySelector("#list");
let personInput = document.querySelector("#name");

let personId = 1;

form.addEventListener("submit", function(event){
    event.preventDefault();
    let val = personInput.value;
    let li = document.createElement("div");
    let liText = document.createTextNode(val)
    li.appendChild(liText)
    people.appendChild(li);
    li.classList.add("list-group-item")

    // 
    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger", "ml-3")
    let spanText = document.createTextNode("-")
    button.appendChild(spanText);
    button.addEventListener("click", function() {
        console.log(this)
    })
    li.appendChild(button)


    li.setAttribute("id", `person-${personId++}`)

 
    personInput.value = "";
})

// createElement
// createTextNode
// appendChild
// classList.add("firstClass", "secondClasS")
// setAttribute(attribute, value)