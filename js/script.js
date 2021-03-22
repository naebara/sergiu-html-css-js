
var list = [1, 2, 3, 4, 5, "adsf", null, undefined, true, false];
// let const
list.forEach((element, index) =>
    console.log(element, " index : " + index)
);

let allHei = document.getElementsByClassName("hei");
console.log(allHei);

function hi() {

    let p = document.querySelector("#p");
    p.style.color = "red";
    p.style.backgroundColor = "blue"
    return 8;

}

const showDate = () => {
    console.log("null element : " + document.querySelector("#date"))
    document.querySelector("#date").innerText = new Date()
}

let res = hi()
console.log(res)