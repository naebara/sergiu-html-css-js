function req(method, url, body, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(JSON.stringify(body));
  xhr.responseType = "json";

  xhr.onload = function () {
    let data = xhr.response;
    callback(data);
  };
}

// document.querySelector("#login").addEventListener("click", function(){
//     const loginBody = {
//         email: "eve.holt@reqres.in",
//         password: "cityslickauuu"
//     }
//     req('POST', 'https://reqres.in/api/login', loginBody, function(){
//         req("GET", 'https://jsonplaceholder.typicode.com/users', null,  function(response){
//             console.log(response)

//         });
//     });
// })

document.querySelector("#login").addEventListener("click", function () {
  req(
    "GET",
    "http://localhost:8080/person/getAllPersons",
    null,
    function (persons) {
      document.querySelector(".text").innerHTML = JSON.stringify(
        persons,
        null,
        4
      );
    }
  );
});

let person = {
  firstName: "Sergiu",
  lastName: "Brehuescu",
  gender: "MALE",
  age: 27,
  email: "sergiu@mail.com",
  dateOfBirth: "08-02-2021",
  drivingLicense: {
    releasedAt: "08-02-2021",
    expireDate: "08-02-2027",
    category: "A",
    image: "Image",
    releasedBy: "SCLEP",
  },
};
// req("POST", "http://localhost:8080/person/add", person, function (result) {});

fetch("http://localhost:8080/person/add", {
  method: "POST",
  body: JSON.stringify(person),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("http://localhost:8080/person/getAllPersons")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".text").innerHTML = JSON.stringify(data, null, 4);
  });
