// let submit = document.querySelector("#sub");


console.log(typeof('s'))

// submit.addEventListener("click", function(event) {
//     event.preventDefault();
   
// })



let form = document.querySelector("#form");

form.onsubmit = function(event) {
    event.preventDefault();
    // let name = document.querySelector("#name");
    // console.log(name.value)

    //     let pass = document.querySelector("#pass");
    // console.log(pass.value)

    let gender = document.getElementsByName("gender");
    console.log(gender)
   
    // for (let index = 0; index < gender.length; index++) {
    //     const element = gender[index];
    //     if(element.checked){
    //         log(element.value)
    //     }
    // }


    let hobbies = document.getElementsByName("hobbies");
   
    // for (let index = 0; index < hobbies.length; index++) {
    //     const element = hobbies[index];
    //     if(element.checked){
    //         log(element)
    //     }
    // }
   
}


function nameFocus(){
    console.log("focus on name")
}

function nameChange(){
    console.log("name changed")

}

function log(e){
    console.log(e);
}