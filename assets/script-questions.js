//Timer
var timerEL = document.getElementById("time-left");
var countdown = 15;

var startTimer = setInterval(function () {
  countdown--;
  timerEL.textContent = countdown;
  if (countdown <= 0) {
    clearInterval(startTimer);
  }
  if (countdown <= 5) {
    timerEL.setAttribute("style", "color: red;");
  }
}, 1000);

//score tracker
var score = 0;
if (countdown == 0) {
  score;
}

//question tracker

var Counter = document.getElementById("question-counter-up");
var totalQuestionCounter = document.getElementById("question-counter-left");
var nextButton = document.getElementById("next-button");

totalQuestionCounter.textContent = 4;
var questionCounter = 1;
Counter.textContent = questionCounter;


//function executes on click of next question button. 
//question counter increases by 1, showNextQuestion, and showAnswers execute on click.
function questionTracker() {
  nextButton.addEventListener("click", () => {
    questionCounter++;
    currentQuestionsIndex++;
    currentAnswersIndex++;
    Counter.textContent = questionCounter;
    countdown = 15;
    console.log(questionCounter);
    console.log(currentAnswersIndex);
    console.log(currentAnswersIndex);
    displayQuestion();
    displayAnswers();
  });
}

//start game function
var questionEl = document.getElementById("question");
var answerButton1 = document.getElementById("btn-btn1");
var answerButton2 = document.getElementById("btn-btn2");
var answerButton3 = document.getElementById("btn-btn3");
var answerButton4 = document.getElementById("btn-btn4");

var randomQuestions;
let currentQuestionsIndex = 0;
let currentAnswersIndex = 0;

function startQuiz() {
  console.log("Quiz started");

  currentQuestionsIndex;
  displayQuestion();
  displayAnswers();
  questionTracker();
}


function displayQuestion(){
questionEl.innerText = questions[currentQuestionsIndex].question;
}

//function displays question from answer bank array
function displayAnswers() {
  console.log(questions[currentAnswersIndex].answer1);
  answerButton1.innerText = questions[currentAnswersIndex].answer1;
  answerButton2.innerText = questions[currentAnswersIndex].answer2;
  answerButton3.innerText = questions[currentAnswersIndex].answer3;
  answerButton4.innerText = questions[currentAnswersIndex].answer4;
}

function chooseAnswer() {
  if (
    questions[currentQuestionsIndex].answer1 ==
    questions[currentQuestionsIndex].correctAnswer
  ) {
    console.log("Correct!");
  }
  if (
    questions[currentQuestionsIndex].answer2 ==
    questions[currentQuestionsIndex].correctAnswer
  ) {
    console.log("Correct!");
  }
  if (
    questions[currentQuestionsIndex].answer3 ==
    questions[currentQuestionsIndex].correctAnswer
  ) {
    console.log("Correct!");
  }
  if (
    questions[currentQuestionsIndex].answer4 ==
    questions[currentQuestionsIndex].correctAnswer
  ) {
    console.log("Correct!");
  }
}

//question and answer bank
var questions = [
  //question 1
  {
    question: "What does CSS mean?",

    answer1: "Color Sample Sheet",
    answer2: "Cool Styling Sample",
    answer3: "Couples Stlye Sheet",
    answer4: "Cascading Style Sheet",
    correctAnswer: "Cascading Style Sheet"
  },
  //question 2
  {
    question: "What does HTML mean?",

    answer1: "Hinted Text Sheet",
    answer2: "Hyper Text Markup Language",
    answer3: "Helpful Text Made Language",
    answer4: "Have Made Text Language",
    correctAnswer: "Hyper Text Markup Language"
  },

  {
    question: "How many bits in a byte?",

    answer1: "2",
    answer2: "6",
    answer3: "8",
    answer4: "12",
    correctAnswer: "8"
  },

  {
    question: "What does HTML mean?",

    answer1: "Hinted Text Sheet",
    answer2: "Hyper Text Markup Language",
    answer3: "Helpful Text Made Language",
    answer4: "Have Made Text Language",
    correctAnswer: "Hyper Text Markup Language"
  },
];

startQuiz();
