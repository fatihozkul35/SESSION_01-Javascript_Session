//* Selectors
const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");
const img = document.querySelector("img");
const languages = document.querySelector(".languages");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

const langSection = document.getElementById("lang-section");
const ul = document.querySelector("ul");
//! ------------------ EVENTS -------------------
//* Triggred when on btn is clickled
onBtn.addEventListener("click", () => {
  img.src = "./img/lamba_on.gif";
});

//* Triggred when off btn is clickled
offBtn.addEventListener("click", () => {
  img.src = "./img/lamba_off.gif";
});

//* Triggred when mouse is over the image.
img.onmouseover = () => {
  img.src = "./img/lamba_on.gif";
};

//* Triggred when mouse is out the image.
img.onmouseout = () => {
  img.src = "./img/lamba_off.gif";
};

//? Creating new h1
const h1 = document.createElement("h1");
const text = document.createTextNode("Programming Languages");
h1.appendChild(text);
langSection.appendChild(h1);
console.log(langSection);
ul.before(h1);

//? it is not good approach for programming
// ul.innerHTML += `<h1>Programming Languages</h1>`;

//! childeren property si ile alt node'lar seçilebilir.
console.log(langSection.children[0].children[1]);

//? Triggred when add buton is clicked.
addBtn.addEventListener("click", () => {
  if (!languages.value) {
    alert("Please Enter a langugage");
  } else {
    ul.innerHTML += `<li>${languages.value}</li>`;
    checkJavascriptText();
    languages.value = "";
  }
});

deleteBtn.addEventListener("click", () => {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("There isn't any language to delete");
});

const checkJavascriptText = () => {
  document.querySelectorAll("ul li").forEach((item) => {
    const lowerCaseItem = item.textContent.toLowerCase();
    //* localeCompare method returns 0 if two string are equal.
    if (lowerCaseItem.localeCompare("javascript") == 0) {
      item.className = "javascript";
      //!alternetively
      // item.setAttribute("class", "javascript");
    }
  });
};

//!Trigerred When any key is pressed
languages.onkeydown = function (e) {
  console.log(e);
  //? when Enter key is pressed
  if (e.keyCode === 13) {
    //* Call the click function of add button.
    addBtn.click();
  }

  //? when del key is pressed
  if (e.key === "Delete") {
    //* Call the click function of delete button.
    deleteBtn.click();
  }
};

//? Focus to the language input when window is loaded,
//? and run the startup functions like checkJavascriptStyle()
window.onload = () => {
  checkJavascriptText();
  //?focus on the languages input when window is loaded
  languages.focus();
};
