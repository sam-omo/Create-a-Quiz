// Globals
let markQuizBtn = document.getElementById("mark-quiz");
let correctSpan1 = document.getElementById("correct1");
let correctSpan2 = document.getElementById("correct2");
let correctSpan3 = document.getElementById("correct3");
let correctSpan4 = document.getElementById("correct4");
let correctSpan5 = document.getElementById("correct5");
let correctSpan6 = document.getElementById("correct6");
let score = document.getElementById("score");
let scoreMessage = document.getElementById("message");

//
let correctValue1 = 0;
let correctValue2 = 0;
let correctValue3 = 0;
let correctValue4 = 0;
let correctValue5 = 0;
let correctValue6 = 0;

//

markQuizBtn.addEventListener("click", markQuiz);

function markQuiz() {
  let question1 = document.getElementById("question-1").value;
  let question2 = document.getElementById("question-2").value;
  let question3 = document.getElementById("question-3").value;
  let question4 = document.getElementById("question-4").value;
  let question5 = document.getElementById("question-5").value;
  let question6 = document.getElementById("question-6").value;

  if (
    question1.toLowerCase() == `golden state warriors` ||
    question1.toLowerCase() == `golden state` ||
    question1.toLowerCase() == `gsw` ||
    question1.toLowerCase() == `warriors`
  ) {
    correctSpan1.innerHTML = `Correct`;
    document.getElementById("question-1").style.borderColor = `green`;
    correctSpan1.style.color = `green`;
    correctValue1 = 1;
  } else {
    correctSpan1.innerHTML = `Incorrect`;
    document.getElementById("question-1").style.borderColor = `red`;
    correctSpan1.style.color = `red`;
    correctValue1 = 0;
  }

  if (question2.toLowerCase() == `national basketball association`) {
    correctSpan2.innerHTML = `Correct`;
    document.getElementById("question-2").style.borderColor = `green`;
    correctSpan2.style.color = `green`;
    correctValue2 = 1;
  } else {
    correctSpan2.innerHTML = `Incorrect`;
    document.getElementById("question-2").style.borderColor = `red`;
    correctSpan2.style.color = `red`;
    correctValue2 = 0;
  }

  if (
    question3.toLowerCase() == `charlotte hornets` ||
    question3.toLowerCase() == `charlotte` ||
    question3.toLowerCase() == `hornets`
  ) {
    correctSpan3.innerHTML = `Correct`;
    document.getElementById("question-3").style.borderColor = `green`;
    correctSpan3.style.color = `green`;
    correctValue3 = 1;
  } else {
    correctSpan3.innerHTML = `Incorrect`;
    document.getElementById("question-3").style.borderColor = `red`;
    correctSpan3.style.color = `red`;
    correctValue3 = 0;
  }

  if (
    question4.toLowerCase() == `new york knicks` ||
    question4.toLowerCase() == `new york` ||
    question4.toLowerCase() == `nyk` ||
    question4.toLowerCase() == `knicks`
  ) {
    correctSpan4.innerHTML = `Correct`;
    document.getElementById("question-4").style.borderColor = `green`;
    correctSpan4.style.color = `green`;
    correctValue4 = 1;
  } else {
    correctSpan4.innerHTML = `Incorrect`;
    document.getElementById("question-4").style.borderColor = `red`;
    correctSpan4.style.color = `red`;
    correctValue4 = 0;
  }

  if (question5.toLowerCase() == `6` || question5.toLowerCase() == `six`) {
    correctSpan5.innerHTML = `Correct`;
    document.getElementById("question-5").style.borderColor = `green`;
    correctSpan5.style.color = `green`;
    correctValue5 = 1;
  } else {
    correctSpan5.innerHTML = `Incorrect`;
    document.getElementById("question-5").style.borderColor = `red`;
    correctSpan5.style.color = `red`;
    correctValue5 = 0;
  }

  if (
    question6.toLowerCase() == `lebron james` ||
    question6.toLowerCase() == `lebron` ||
    question6.toLowerCase() == `lbj` ||
    question6.toLowerCase() == `the goat`
  ) {
    correctSpan6.innerHTML = `Correct`;
    document.getElementById("question-6").style.borderColor = `green`;
    correctSpan6.style.color = `green`;
    correctValue6 = 1;
  } else {
    correctSpan6.innerHTML = `Incorrect`;
    document.getElementById("question-6").style.borderColor = `red`;
    correctSpan6.style.color = `red`;
    correctValue6 = 0;
  }

  let totalCorrect = `${
    correctValue1 +
    correctValue2 +
    correctValue3 +
    correctValue4 +
    correctValue5 +
    correctValue6
  }`;

  let totalPercentage = (totalCorrect / 6) * 100;

  if (totalCorrect >= 6) {
    scoreMessage.innerHTML = `You know your stuff! Are you in the NBA?`;
  } else if (totalCorrect > 3) {
    scoreMessage.innerHTML = `You seem like an NBA casual!`;
  } else if (totalCorrect > 0) {
    scoreMessage.innerHTML = `Study on basketball more!`;
  } else {
    scoreMessage.innerHTML = `Do you even know what basketball is?`;
  }

  score.innerHTML = `${totalCorrect}/6 (${totalPercentage.toFixed(1)}%)`;
}
