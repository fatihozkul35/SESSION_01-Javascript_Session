//********Elemenst Selector */

const lamp = document.querySelector(".lamp");
const buttonOn = document.querySelector(".btn-outline-warning");
const buttonOff = document.querySelector(".btn-outline-primary");
const buttonAdd = document.querySelector(".btn-success");
const buttonDelete = document.querySelector(".btn-danger");

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
buttonOn.addEventListener("click", lampOn);
buttonOff.addEventListener("click", lampOff);

function lampOn() {
  lamp.src = "./img/lamba_on.gif";
}
function lampOff() {
  lamp.src = "./img/lamba_off.gif";
}
const languagesList = document.querySelector(".languagesList");
const title = document.createElement("h3");
title.textContent = "Programming Languages";
languagesList.before(title);

buttonAdd.addEventListener("click", todoAdd);
buttonDelete.addEventListener("click", todoDelete);

function todoAdd() {
  let inputValue = document.querySelector(".languagesInput");
  if (!inputValue.value) {
    alert("please enter a programming language");
  } else {
    languagesList.innerHTML += `<li>${inputValue.value}</li>`;
    inputValue.value = "";
  }
  checkJavascriptText();
}

function todoDelete() {
  if (languagesList.childElementCount > 0) {
    languagesList.removeChild(languagesList.lastElementChild);
  } else {
    alert("there isn`t any programming languages to delete");
  }
}

const checkJavascriptText = (item) => {
  document.querySelectorAll("ul li").forEach((item) => {
    const lowerCaseItem = item.textContent.toLowerCase();
    if (lowerCaseItem.localeCompare("javascript") == 0) {
      item.classList.add("javascript");
    }
  });
};

window.onload = checkJavascriptText;
