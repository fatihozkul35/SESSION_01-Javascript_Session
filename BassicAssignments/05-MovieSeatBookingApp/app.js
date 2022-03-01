//*** Elements Selector */

const seats = document.querySelectorAll(".container .seat");
const movies = document.getElementById("movies");
let count = document.getElementById("count").textContent;
let total = document.getElementById("total").textContent;
let selectedMovie = document.getElementById("movie").textContent;
const payment = document.getElementById("payment");
selectedMovie = movies.options[movies.selectedIndex].textContent.slice(0, -5);
let value = [];

//! DOM Content Loading
// movies.options.filter(function (movie) {
//   const value = JSON.parse(localStorage.getItem(selectedMovie));
// });
// movies.addEventListener("change", function () {
//   console.log("object");
//   window.addEventListener("load", () => {
//     console.log(selectedMovie);
//     const value = JSON.parse(localStorage.getItem(selectedMovie));
//     console.log(value);
//     value.map(function (seat) {
//       seats[seat].classList.add("occupied");
//     });
//   });
// });

window.addEventListener("DOMContentLoaded", () => {
  value = JSON.parse(localStorage.getItem(`${selectedMovie}`)) || [];
  value.map(function (seat) {
    seats[seat].classList.add("occupied");
  });
});
//! UI Operations

movies.addEventListener("click", selectMovie);

function selectMovie() {
  seats.forEach((seat) => {
    seat.className = "seat";
  });
  selectedMovie = movies.options[movies.selectedIndex].textContent.slice(0, -5);
  console.log(selectedMovie);
  value = JSON.parse(localStorage.getItem(`${selectedMovie}`)) || [];
  console.log(value);
  value.map(function (seat) {
    seats[seat].classList.add("occupied");
  });
}

//! Seat Booking Operations

seats.forEach(function (seat, i) {
  seat.addEventListener("click", function () {
    if (seat.classList.contains("occupied")) {
      return;
    } else {
      seat.classList.toggle("selected");
      if (seat.classList.contains("selected")) {
        count++;
        document.getElementById("count").textContent = count;
        document.getElementById("total").textContent = count * movies.value;
      } else {
        count--;
        document.getElementById("count").textContent = count;
        document.getElementById("total").textContent = count * movies.value;
      }
    }
  });
  payment.addEventListener("click", function () {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
      value.push(i);
    }
    setToLocalStorage(selectedMovie, JSON.stringify(value));
    resetSeatCountAndPayment();
  });
});

//! Set Data Local Storage

function setToLocalStorage(k, v) {
  localStorage.setItem(k, v);
}

//! Update count and payment amount
function resetSeatCountAndPayment() {
  count = 0;
  document.getElementById("count").textContent = count;
  document.getElementById("total").textContent = count * movies.value;
}
