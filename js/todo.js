const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //id가 불일치하는 것들만 남김. 즉, id가 일치하면 false가 되어서 남지않음.
  li.remove();
  saveToDos();
}
function checkToDo(e) {
  const li = e.target.parentElement;
  li.style.textDecoration = "line-through";
  e.target.classList.remove("fa-regular");
  e.target.classList.add("fa-solid");
  toDos = toDos.map((toDo) => {
    if (toDo.id === parseInt(li.id)) {
      toDo.check = true;
      return toDo;
    }
    return toDo;
  });
  saveToDos();
}

function reCheckToDo(toDo) {
  const li = document.getElementById(`${toDo.id}`);
  const i = li.children[1];
  li.style.textDecoration = "line-through";
  i.classList.remove("fa-regular");
  i.classList.add("fa-solid");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");

  const check_i = document.createElement("i");
  check_i.classList.add("fa-regular");
  check_i.classList.add("fa-square-check");
  const del_i = document.createElement("i");
  del_i.classList.add("fa-regular");
  del_i.classList.add("fa-trash-can");
  li.appendChild(span);
  li.appendChild(check_i);
  li.appendChild(del_i);
  span.innerText = newTodo.text;
  check_i.addEventListener("click", checkToDo);
  del_i.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
  if (newTodo.check) reCheckToDo(newTodo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    check: false,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
