const ulElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const todos = JSON.parse(localStorage.getItem("list_todos")) || [];

const renderTodos = () => {
  ulElement.innerHTML = "";

  for (todo of todos) {
    const todoElement = document.createElement("li");
    ulElement.appendChild(todoElement);

    const todoText = document.createTextNode(todo);
    
    const pElement = document.createElement("p")
    pElement.appendChild(todoText)
    todoElement.appendChild(pElement);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    const linkText = document.createTextNode("x");
    linkElement.appendChild(linkText);
    todoElement.appendChild(linkElement);

    const pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
  }
};
renderTodos();

const addTodo = () => {
  const todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";

  renderTodos();
  saveToStorage();
};

buttonElement.onclick = addTodo;

const deleteTodo = (pos) => {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
};

const saveToStorage = () => {
  localStorage.setItem("list_todos", JSON.stringify(todos))
}
