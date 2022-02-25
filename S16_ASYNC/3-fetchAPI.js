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
const getButton = document.querySelector(".btn");

const getUsers = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        //! error handling
        throw new Error(`Something Went Wrong:${res.status}`);
      }
      return res.json();
    })
    .then((data) => updateDom(data))
    .catch((err) => console.log(err));
};

getButton.addEventListener("click", getUsers);

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");
  data.forEach((user) => {
    userDiv.innerHTML += ` <h1 class='mt-4'>NAME: <span class='text-danger'>${user.login}</span></h1>
    <img src=${user.avatar_url} width='50%' alt=""/>
    <h3>HTML_URL:${user.html_url}</h3>
    <h3>LOGIN:${user.login}</h3>`;
  });
};
