let table = document.querySelector("#table");
fetch("https://608440d79b2bed0017040d89.mockapi.io/countme/students")
  .then((res) => res.json())
  .then((students) => {
    students.forEach((s) => {
      loadStudent(s);
    });
  });

function loadStudent(s) {
  let tr = ce("tr");
  let id = ce("th");
  let name = ce("td");
  let lang = ce("td");

  let view = ce("a");
  view.classList.add("btn", "btn-secondary");
  ap(view, text("view"));

  view.setAttribute("href", `student.html?id=${s.id}`);

  console.log(tr.href);

  let idText = text(s.id);
  let nameText = text(s.name);
  let langText = text(s.language);

  ap(id, idText);
  ap(name, nameText);
  ap(lang, langText);

  ap(tr, id);
  ap(tr, name);
  ap(tr, lang);
  ap(tr, view);
  ap(table, tr);
}
function ce(type) {
  return document.createElement(type);
}

function text(text) {
  return document.createTextNode(text);
}

function ap(father, child) {
  father.appendChild(child);
}
