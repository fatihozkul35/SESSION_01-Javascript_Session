//Variables
let todos = JSON.parse(localStorage.getItem("todos")) ?? [];
const todoUl = document.querySelector("#todo-ul");
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");

const showTodos = () => {
  todoUl.textContent = "";

  todos.forEach((todo) => {
    todoUl.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${todo}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;
  });

  createDeleteBtns();
  createCheckBtns();

  localStorage.setItem("todos", JSON.stringify(todos));
  todoInput.value = "";
  todoInput.focus();
};

const createDeleteBtns = () => {
  const deleteBtns = document.querySelectorAll(".fa-trash");
  for (let i in deleteBtns) {
    deleteBtns[i].onclick = () => {
      todos.splice(i, 1);
      showTodos();
      //? alternative way (instead of showTodos()'s invoking)
      // deleteBtns[i].parentNode.remove();
      // localStorage.setItem("todos", JSON.stringify(todos));
    };
  }
};

const createCheckBtns = () => {
  const checkBtns = document.querySelectorAll(".fa-check");
  for (let i in checkBtns) {
    checkBtns[i].onclick = () => {
      if (checkBtns[i].parentNode.className.includes("checked")) {
        checkBtns[i].parentNode.className = "";
      } else {
        checkBtns[i].parentNode.className = "checked";
      }
    };
  }
};

//? Add Buton is clicked
document.querySelector("#todo-button").addEventListener("click", () => {
  if (!todoInput.value) {
    alert("Please Enter your todos");
  } else {
    todos.push(todoInput.value);
    showTodos();
  }
});

//? Enter button is pressed
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") todoButton.click();
});

//? Start the app
showTodos();
