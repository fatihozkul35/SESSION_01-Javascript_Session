//* ============================================================
//*  GUESS MY NUMBER
//*  Game Logic
//* ============================================================

//? Calculate a random number between 1-100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//? Selectors
const again = document.querySelector(".again");
const check = document.querySelector(".check");

//? Variables
let score = 10;
// let topScore = 0;

//? Create a variable in the localStorage
let topScore = localStorage.getItem("topScore");

//? Update top-score value in the screen
//? if topScore is null, assign it to zero otherwise assign the value of topScore
document.querySelector(".top-score").textContent = topScore ?? 0;

//? When check button is clicked
check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  const msg = document.querySelector(".msg");

  //? if  quess is not validate, inform the player
  if (!guess) {
    msg.textContent = "Please Enter Your Guess";

    //? if  quess is correct
  } else if (guess === randomNumber) {
    msg.textContent = "Congrulations  🎉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;
    //? Update the scores
    if (score > topScore) {
      // topScore = score;
      //? update the topScore variable in local localStorage
      localStorage.setItem("topScore", score);
      //? Update top-score value in the screen
      document.querySelector(".top-score").textContent = score;
    }
    //? if  quess is incorrect
  } else {
    if (score > 1) {
      score--;
      console.log(score);
      guess < randomNumber
        ? (msg.textContent = " 📈 Increase")
        : (msg.textContent = " 📉 Decrease");
      document.querySelector(".score").textContent = score;
    } else {
      msg.textContent = "Sorry, you lost.😞";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//? When again button is clicked
again.addEventListener("click", () => {
  score = 10;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  document.querySelector(".score").textContent = 10;
  document.querySelector(".msg").textContent = "Starting..";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".guess").value = "";
});
