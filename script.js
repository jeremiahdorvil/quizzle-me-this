var timer = document.querySelector("#time");
var startEl = document.querySelector("#start");
var Answer1 = document.querySelector(".questions-1");
var Answer2 = document.querySelector(".questions-2");
var Answer3 = document.querySelector(".questions-3");
var Answer4 = document.querySelector(".questions-4");
var username = document.querySelector

var secondsLeft = 30;

startEl.addEventListener("click", function() {
    setTime();
    }
);

function showQuiz() {
if(questions)
};

function setTime() {
    
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
  timer.textContent = "Time Has Elapsed";
}

var score = {
    username: user
}
localStorage.setItem("score", JSON.stringify())