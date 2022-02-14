const btn = document.getElementById("btn");
const radiusInput = document.querySelector("#radius");

const calculate = () => {
  const r = document.querySelector("#radius").value;
  const area = (Math.PI * r * r).toFixed(3);
  const perimeter = (2 * Math.PI * r).toFixed(3);
  document.querySelector(".area").textContent = area;
  document.querySelector(".perimeter").textContent = perimeter;
};

btn.onclick = calculate;
radiusInput.onchange = calculate;

radiusInput.onmouseover = function (event) {
  console.log(event);
  radiusInput.style.backgroundColor = "darkgray";
};

radiusInput.onmouseout = function () {
  radiusInput.style.backgroundColor = "white";
};

window.onload = function () {
  radiusInput.focus();
};
