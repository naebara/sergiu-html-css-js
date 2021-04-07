console.log("asdf")

let el = document.querySelector("#in")
let step = 1;

setInterval(function(){
    el.style.left = (el.offsetLeft + step) + "px"
    if(el.offsetLeft > 400 ){
        step = -1;
    }
    if(el.offsetLeft < 0 ){
        step = 1;
    }
}, 1)

