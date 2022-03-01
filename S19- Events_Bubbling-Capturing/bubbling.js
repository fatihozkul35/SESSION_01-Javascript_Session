//* ======================================================
//*           EVENT BUBBLING (EVENT PROPAGATION)
//* ======================================================

//! When an event happens on an element, it first runs the
//! handlers on it, then on its parent, then all the way
//! up on other ancestors.
//! The process is called “bubbling”, because events “bubble”
//! from the inner element up through parents like a bubble in the water.

document.querySelector("form").addEventListener("click", () => alert("form"));

document.querySelector("div").addEventListener("click", () => alert("div"));

document.querySelector("p").addEventListener("click", () => alert("p"));

//! A click on the inner <p> first runs onclick:
//* 1- on that <p>
//* 2- then on the outer <div>.
//* 3- then on the outer <form>.
//* 4- And so on upwards till the document object. (if any event is declared)

//* event.target
//*-------------------------------------------------------------------
//! A handler on a parent element can always get the details about
//! where it actually happened.

//! The most deeply nested element that caused the event is called
//! a target element, accessible as event.target.

document.querySelector("form").onclick = function (event) {
  console.log(event.target);

  //! change the backgroundColor (yellow) of the clicked element
  event.target.style.backgroundColor = "yellow";

  //*! after 500ms, remove assigned backgroundColor in the javascript
  setTimeout(() => {
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    event.target.style.backgroundColor = "";
  }, 500);
};

//* STOP BUBBLING
//*-------------------------------------------------------------------

//! A bubbling event goes from the target element straight up.
//! Normally it goes upwards till <html>, and then to document object,
//! and some events even reach window, calling all handlers on the path.

//! But any handler may decide that the event has been fully processed
//! and stop the bubbling.

//! Solution :event.stopPropagation().

document.querySelector("div").onclick = function (event) {
  event.stopPropagation();
};
