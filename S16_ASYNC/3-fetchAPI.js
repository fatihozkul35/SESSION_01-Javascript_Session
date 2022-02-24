//* ======================================================================
//*                          3- FETCH
//* =======================================================================

//? The Fetch API is a simple interface for fetching resources.
//? Fetch allows us to make network request and handle responses.
//? Fetch API is one of the most widely used examples of asynchronous
//? operations in Javascript.

//? The fetch function takes one mandatory argument, which is the path
//? to the resource you want to fetch and returns a Promise that resolves
//? to the Response of that request.

//* Selectors
const userDiv = document.querySelector(".users");
const getButton = document.querySelector(".btn");

const getUsers = () => {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => updateDom(data))
    .catch((err) => console.log(err));
};

getButton.addEventListener("click", getUsers);

const updateDom = (data) => {
  console.log(data);
};
