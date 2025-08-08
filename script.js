var intScore = 0;
var extScore = 0;
var numQuestion = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2"); 
var q2cite = document.getElementById("q2cite");
var q3cite = document.getElementById("q3cite");

var result = document.getElementById("result");
var button = document.getElementById("restart");

q1a1.addEventListener("click", updateIntScore);
q1a1.addEventListener("click", closeQuestionOne);
q1a1.addEventListener("click", q2cite.scrollIntoView);
q1a2.addEventListener("click", updateExtScore);
q1a2.addEventListener("click", closeQuestionOne);
q1a2.addEventListener("click", q2cite.scrollIntoView);
q2a1.addEventListener("click", updateExtScore);
q2a1.addEventListener("click", closeQuestionTwo);
q2a1.addEventListener("click", q3cite.scrollIntoView);
q2a2.addEventListener("click", updateIntScore);
q2a2.addEventListener("click", closeQuestionTwo);
q2a2.addEventListener("click", q3cite.scrollIntoView);
q3a1.addEventListener("click", updateExtScore);
q3a1.addEventListener("click", closeQuestionThree);
q3a1.addEventListener("click", restart.scrollIntoView);
q3a2.addEventListener("click", updateIntScore);
q3a2.addEventListener("click", closeQuestionThree);
q3a2.addEventListener("click", restart.scrollIntoView);


function updateIntScore() {
  intScore += 1;
  numQuestion += 1;
  console.log("The question count is " + numQuestion + "and the introvert score is " + intScore); 

  if (numQuestion == 3) {
    console.log("Finished Quiz");
    updateResult();
  }
}

function updateExtScore() {
  extScore += 1;
  numQuestion += 1;
  console.log("The question count is " + numQuestion + "and the extrovert score is " + extScore);

  if (numQuestion == 3) {
    console.log("Finished Quiz");
    updateResult();
  }
}

function updateResult () {
  if (intScore >= 2) {
      result.innerHTML = "You are an introvert!";
      console.log("You are an introvert");
    }  else if (extScore += 2) {
      result.innerHTML = "You are an extrovert!";
      console.log("You are an extrovert");
    }
}

button.addEventListener ("click", restartQuiz);

function restartQuiz () {
  intScore = 0;
  extScore = 0;
  numQuestion = 0;
  result.innerHTML = "You are an...";
  console.log(extScore);

  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeQuestionOne () {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function closeQuestionTwo () {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function closeQuestionThree () {
  q3a1.disabled = true;
  q3a2.disabled = true;
}
