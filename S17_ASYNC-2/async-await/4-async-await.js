//* =======================================================================
//*                          4- ASYNC-AWAIT
//* =======================================================================
//? Async-Await was added in ECMAScript 2017. These features
//? basically act as syntactic sugar on top of promises, making
//? asynchronous code easier to write and to read afterwards.

//* async keyword, which you put in front of a function declaration to
//* turn it into an async function.
//* An async function is a function that knows how to expect the possibility
//* of the await keyword being used to invoke asynchronous code.

//* Await can be put in front of any async promise-based function to pause your
//* code on that line until the promise fulfills, then return the resulting value.

//* Selectors
const getButton = document.querySelector(".btn");

async function getUsers() {
  try {
    const res = await fetch("https://api.github.com/user");
    if (!res.ok) {
      //! error handling
      throw new Error();
    }
    const data = await res.json();
    updateDom(data);
  } catch (error) {
    console.log(error);
  }
}

getButton.addEventListener("click", getUsers);

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");
  data.forEach((user) => {
    const { login, avatar_url, html_url } = user; //! destr
    userDiv.innerHTML += ` <h1 class='mt-4'>NAME: <span class='text-danger'>${login}</span></h1>
    <img src=${avatar_url} width='50%' alt=""/>
    <h3>HTML_URL:${html_url}</h3>
    <h3>LOGIN:${login}</h3>`;
  });
};
