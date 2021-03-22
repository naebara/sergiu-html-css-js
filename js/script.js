

document.querySelector("#p").style.color = "red";
document.querySelector("#p").style.backgroundColor = "blue";

var list = [1, 2, 3, 4, 5, "adsf", null, undefined, true, false];
// let const
list.forEach((element, index) =>
    console.log(element, " index : " + index)
);

let allHei = document.getElementsByClassName("hei");
console.log(allHei);