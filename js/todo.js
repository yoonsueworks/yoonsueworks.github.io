const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const eventTarget = event.target.parentNode;
  eventTarget.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(eventTarget.id));
  saveTodos(); // 방금 클릭한 것(eventtarget)이 아닌 id를 가진 todo는 간직하고싶어
}

function paintTodo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "erase";
  button.addEventListener("click", deleteTodo);

  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();

  const newToDo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY); // 로컬 스토리지에서 배열을 가지고 온 것!

if (savedTodos !== null) {
  //만약, 배열이 비어있지 않다면
  const parsedTodos = JSON.parse(savedTodos); //스트링화 된 배열을 다시 배열로 바꾸자.
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
