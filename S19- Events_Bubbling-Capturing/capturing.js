//* ======================================================
//*            CAPTURING (EVENT PROPAGATION)
//* ======================================================

//!With capturing, the event is first captured by the outermost
//! element and propagated to the inner elements.

//! eventTarget.addEventListener(type,listener,[,useCapture]);

document
  .querySelector("form")
  .addEventListener("click", () => alert("form"), true);

document
  .querySelector("div")
  .addEventListener("click", () => alert("div"), true);

document.querySelector("p").addEventListener("click", () => alert("p"), true);
