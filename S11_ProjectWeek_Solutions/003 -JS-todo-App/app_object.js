//Variables

// const myTodos = []
let myTodos = JSON.parse(localStorage.getItem("myTodos")) || [];
console.log(myTodos);
const todoUl = document.querySelector("#todo-ul");
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");

const displayTodos = () => {
  todoUl.textContent = "";

  myTodos.forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute("id", item.id);

    if (item.isDone) {
      li.className = "checked";
    }

    const checkBtn = document.createElement("i");
    checkBtn.className = "fa fa-check fa-lg";

    checkBtn.addEventListener("click", (e) => {
      console.log(e);
      const selectedID = e.target.parentElement.getAttribute("id");
      doneTodo(selectedID);
    });

    li.appendChild(checkBtn);

    const text = document.createElement("p");
    text.innerText = item.todoText;
    text.addEventListener("click", (e) => {
      const id = e.target.parentElement.getAttribute("id");
      doneTodo(id);
    });

    li.appendChild(text);

    const deleteBtn = document.createElement("i");
    deleteBtn.classList = "fa fa-trash fa-lg";
    deleteBtn.style.color = "red";

    deleteBtn.addEventListener("click", (e) => {
      const selectedID = e.target.parentElement.getAttribute("id");
      deleteTodo(selectedID);
    });

    li.appendChild(deleteBtn);
    todoUl.appendChild(li);
    todoInput.focus();
  });

  localStorage.setItem("myTodos", JSON.stringify(myTodos));
};

todoInput.focus();
displayTodos();

//? Add event listeners
todoButton.addEventListener("click", () => {
  if (!todoInput.value) {
    alert("Please Enter your Todo");
  } else {
    addTodo(todoInput.value);
  }
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") todoButton.click();
});

// Functions
const idCreator = () => {
  let randomID;
  do {
    randomID = Math.floor(Math.random() * 1000);
  } while (myTodos.includes(randomID));
  return randomID;
};

const addTodo = (value) => {
  const todoObject = {
    id: idCreator(),
    todoText: value,
    isDone: false,
  };

  myTodos.push(todoObject);
  todoInput.value = "";
  displayTodos();
};

const doneTodo = (id) => {
  myTodos.map((item, index) => {
    if (item.id == id) {
      myTodos[index].isDone = !myTodos[index].isDone;
    }
  });

  // const selectedTodoIndex = myTodos.findIndex((todo) => todo.id == id);
  // myTodos[selectedTodoIndex].isDone = !myTodos[selectedTodoIndex].isDone;
  displayTodos();
};

const deleteTodo = (todoID) => {
  myTodos = myTodos.filter((item) => item.id != todoID);
  displayTodos();
};
