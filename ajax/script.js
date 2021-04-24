// // callback , callback hell

// function getUser(callback){
//     setTimeout(function(){
//         let user = {
//             email : "naebara@gmail.com",
//             token : "asdflijasdjv9DJ9UAJ**D9HJ9"
//         }
//         callback(user)
//     }, 2000)
// }



// document.querySelector("#getUser").addEventListener('click', function(){
//     getUser(function(user) {
//         getUserTasks(user, function(tasks){
//             getUserPrivateInfo(function(info){
//                 console.log(info)
//             });
//         });
//     });

// })


// function getUserTasks(user, callback){
//     setTimeout(function(){
//         if(user.email == "naebara@gmail.com")
//             callback( ["Wash the car", "Walk the dog", "Study till mid night"])
//         else
//             callback(undefined)
//     }, 2000)
// }

// function getUserPrivateInfo(callback){
//     setTimeout(function (){
//         callback( { info : "da"})
//     }, 1000)
// }



setTimeout(function(){
    console.log("first")
}, 2000)

setTimeout(function(){
    console.log("second")
}, 2000)