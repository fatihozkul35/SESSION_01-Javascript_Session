//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
{
  /* <h1 class="header" onmouseover="style.color='black'"
onmouseout="style.color='blue'"">DOM Temelleri</h1> */
}

//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
// h1 class="header" onmouseover=black()
// onmouseout=blue()>DOM Basics</h1>

// const header = document.querySelector(".header");
// const blue = () => (h1.style.color = "blue");
// const black = () => (h1.style.color = "black");

//? METHOD-3 (ONLY JAVASCRIPT)
//?---------------------------------------------------------------

//* Long-way
// document.querySelector(".header").onmouseover = () => {
//   document.querySelector(".header").style.color = "blue";
// };

// header.onmouseover = () => {
//   header.style.color = "red";
// };
// header.onmouseout = function () {
//   header.style.color = "black";
// };

//? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
//?---------------------------------------------------------------

const h1 = document.querySelector(".header");
h1.addEventListener("mouseover", () => {
  h1.style.color = "purple";
});

const makeBlack = () => {
  h1.style.color = "black";
};

h1.addEventListener("mouseout", makeBlack);

//* -------------------------------------------------------
//* EXAMPLE-2 (Button onclick)
//* -------------------------------------------------------
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundImage = "linear-gradient(to right, purple, yellow)";
  button.innerText = "SEARCH";
});
