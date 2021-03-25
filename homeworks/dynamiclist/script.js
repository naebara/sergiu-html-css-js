let names = ["dan", "sergiu", "Florin", "Denisa"]


let ul = document.querySelector("ul") // by id , by class name, by tagname
names.forEach((name, index) => {
    let li = "<li id='" + "li-" + index + "'>" + name + "</li>"
    ul.innerHTML += li

});
