function cl(event) {
    console.log(event)
    console.log("element clicked")
}
let div = document.querySelector("#di")
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.querySelector("#di").onclick = cl
// document.querySelector("#di").addEventListener("click", cl)

// div.ondblclick = cl
// div.addEventListener("dblclick", function() {console.log("smt")})

// div.onmouseover = function () {
//     console.log("mouse is over ")
// }

// // div.addEventListener("mouseover", function () {
// //     console.log("mouse over inside add event listener")
// // })

// div.onmouseout = function () {
//     console.log("mouse is out")
// }

// div.addEventListener("mouseout", function () {
//     console.log("mouse is out for good")
// })

// d click red
// click blue
// over : green
// out yellow



let p = document.querySelector("#p");
let color = "";
document.onkeydown = function (keyEvent) {
    p.innerHTML += keyEvent.key
    color += keyEvent.key

    div.style.backgroundColor = color
}

function reset() {

    color = "";
    p.innerHTML = ""
    div.style.backgroundColor = "dodgerblue"
}

// onkeypress vs onkeydown