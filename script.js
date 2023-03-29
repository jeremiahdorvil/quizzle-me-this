var questions = [
  {
    question: "What does the acronym CSS stand for?",
    choices: ["Colors Sound Sync", "Computer Syntax Simulator", "Cascading Style Sheets", "Chronological Synchronous Sonogram"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does the acronym HTML stand for?",
    choices: ["Hyper Tunnel Marker Line", "Hyper Text Markup Language", "Hyper Terminal Meta Link", "History Traversal Media Log"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML syntax makes text on the page bold?",
    choices: ["strong", "bold", "h1", "engorge"],
    answer: "strong"
  },
  {
    question: "What is a string in JavaScript?",
    choices: ["Zero or more characters written inside single or double quotes.", "A pimitive value created from literals.", "A line of code for storing and manipulating text.", "All of the above."],
    answer: "All of the above."
  },
  {
    question: "What part of the HTML should include your link for JavaScript?",
    choices: ["The bottom of the head.", "The bottom of the div.", "The bottom of the body.", "The top of the head."],
    answer: "The bottom of the body."
  }
];
var timer = document.querySelector("#time");
var startEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions")
var username = document.querySelector("#initials")
var quizLevel = 0
var secondsLeft = 30;
var score = 0
var timerInterval;
var intro = document.querySelector("#intro")
var highscoreEl = document.querySelector("#score")
// button event listener goes to first function
//first function apply hide to parent of intro, start clock function by timer, unhide div with questions and multi choice.
//second function get question from question array
//third function test if right or wrong
startEl.addEventListener("click", startQuiz);
function startQuiz() {
//call intro div and set attribute by adding class valued hide. 
intro.classList.add("hide")
//call questions div and remove attribute of class
questionsEl.classList.remove("hide")


//start timer
timerInterval = setInterval(setTime, 1000); 
timer.textContent = secondsLeft + " seconds remaining";
// display questions
showQuiz();
}

function showQuiz() {
  if(questions[quizLevel]){
    document.getElementById("question").textContent = questions[quizLevel].question
    document.getElementById("options").innerHTML="";
    
    for(var i=0; i<questions[quizLevel].choices.length; i++){
      var button = document.createElement("button");
      button.textContent = questions[quizLevel].choices[i];
      button.onclick = answerCheck;
      document.getElementById("options").append(button);
    }
    
  }
};

function answerCheck(event) {
  console.log(this);
  console.log(event.target);
  document.getElementById("answer-check").textContent = "Correct Answer: " + questions[quizLevel].answer;
  if(event.target.textContent !== questions[quizLevel].answer) {
    timer = -5;
    var nextButton = document.createElement("button");
    nextButton.textContent = "Next" + questions[quizLevel++].question;
    nextButton.appendChild.textContent = "Wrong";
    console.log("wrong");
  } else {
    score++; 
    var nextButton = document.createElement("button");
    nextButton.textContent = "Next" + questions[quizLevel++].question;
    nextButton.appendChild.textContent = "Correct!";
    console.log("correct");
    // setScore();
  }

quizLevel++;
showQuiz();


  // document.getElementById("answer-check").append(nextButton);
}

function setTime() {
    
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      sendMessage();
    }
}






//end game function
function endGame() {
  if (quizLevel > questions.length) {
    clearInterval(timerInterval);
    setScore();
  }


function sendMessage() {
    clearInterval(timerInterval);

  timer.textContent = "Time Has Elapsed";
}
sendMessage();

questionsEl.classList.add("hide")
highscoreEl.classList.remove("hide");

var score = {
    username: username.value
}  
  document.getElementById("displayScore").append(score)

localStorage.setItem("score", JSON.stringify(score))

}
 //    The function evaluates the answer and displays result
//  function displayAnswer1() {
//   if (document.getElementById('option-11').checked) {
//     document.getElementById('block-11').style.border = '3px solid limegreen'
//     document.getElementById('result-11').style.color = 'limegreen'
//     document.getElementById('result-11').innerHTML = 'Correct!'
//   }
//   if (document.getElementById('option-12').checked) {
//     document.getElementById('block-12').style.border = '3px solid red'
//     document.getElementById('result-12').style.color = 'red'
//     document.getElementById('result-12').innerHTML = 'Incorrect!'
//     showCorrectAnswer1()
//   }
//   if (document.getElementById('option-13').checked) {
//     document.getElementById('block-13').style.border = '3px solid red'
//     document.getElementById('result-13').style.color = 'red'
//     document.getElementById('result-13').innerHTML = 'Incorrect!'
//     showCorrectAnswer1()
//   }
//   if (document.getElementById('option-14').checked) {
//     document.getElementById('block-14').style.border = '3px solid red'
//     document.getElementById('result-14').style.color = 'red'
//     document.getElementById('result-14').innerHTML = 'Incorrect!'
//     showCorrectAnswer1()
//   }
// }
// // the functon displays the link to the correct answer
// function showCorrectAnswer1() {
//   let showAnswer1 = document.createElement('p')
//   showAnswer1.innerHTML = 'Show Corrent Answer'
//   showAnswer1.style.position = 'relative'
//   showAnswer1.style.top = '-180px'
//   showAnswer1.style.fontSize = '1.75rem'
//   document.getElementById('showanswer1').appendChild(showAnswer1)
//   showAnswer1.addEventListener('click', () => {
//     document.getElementById('block-11').style.border = '3px solid limegreen'
//     document.getElementById('result-11').style.color = 'limegreen'
//     document.getElementById('result-11').innerHTML = 'Correct!'
//     document.getElementById('showanswer1').removeChild(showAnswer1)
//   })
// }