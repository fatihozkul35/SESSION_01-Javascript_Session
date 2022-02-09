//* =====================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* EXAMPLE-1 (Paragraph Style)
//*-------------------------------------------------------

const par = document.getElementById("par");
par.style.color = "red";

//* EXAMPLE-2 (Button Style)
//-------------------------------------------------------
const btn = document.getElementById("btn");

btn.style.color = "yellow";
btn.style.backgroundColor = "black";
btn.textContent = "SEARCH";
btn.style.fontSize = "2rem";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* ======================================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------------------
const img = document.getElementsByTagName("img");
img[0].style.borderStyle = "solid";
img[0].style.borderColor = "black";
img[0].style.transform = "rotate(-5deg)";

//*======================================================
//*                   GETELEMENTBYCLASSNAME()
//* ======================================================

//* EXAMPLE-4 (H1 Style)
//* --------------------------------------------------

const header = document.getElementsByClassName("header");
header[0].innerHTML = "<a href='http://www.clarusway.com'>DOM is very easy</a>";
header[0].style.fontFamily = "Tahoma";
header[0].style.color = "blue";

//* ======================================================
//*                   QUERYSELECTOR()
//* ======================================================

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(to right, green,yellow)";

const title = document.querySelector(".title");
title.textContent = "DOM Manipulation ❤️";

//* ======================================================
//*                   ASSIGNMENT
//* ======================================================

const linkA = header[0].children[0];
linkA.style.textDecoration = "none";

linkA.onmouseover = function () {
  linkA.style.color = "yellow";
  img[0].style.transform = "rotate(-20deg)";
  img[0].style.transition = "all 1s";
  body.style.backgroundImage = "linear-gradient(to right, pink,aqua)";
  body.style.backgroundColor = "red";
};

linkA.onmouseout = function () {
  linkA.style.color = "blue";
  img[0].style.transform = "rotate(30deg)";
  img[0].style.transition = "all .5s";
  body.style.backgroundImage = "linear-gradient(to right, green,blue)";
};

// btn.onclick = function () {
//   body.style.backgroundImage = "";
//   body.style.backgroundColor = `${randomFarbe()}`; // #FFA5B3
// };

btn.addEventListener("click", function () {
  body.style.backgroundImage = "";
  body.style.backgroundColor = `${randomFarbe()}`;
});

img[0].style.width = "100px";

// #FF81B0
const hexList = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let index;

function randomFarbe() {
  let farben = "#";

  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * hexList.length);
    farben += hexList[index];
  }

  return farben;
}
