
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


startQuiz();

totalQuestionCounter.textContent = "4 ";
var questionCounter = 1;
Counter.textContent = questionCounter;
nextButton.addEventListener("click", () => {
  questionCounter++;
  console.log(questionCounter);
  Counter.textContent = questionCounter;
  countdown = 15;
  shownNextQuestion()
});


//start game function
var questionEl= document.getElementById("question");
var answerButtons = document.getElementById("button");


let randomQuestions, currentQuestionsIndex 

function startQuiz(){
console.log("Quiz started")
randomQuestions = questions.sort(() => {return 0.5 - Math.random() });
currentQuestionsIndex = 0;
}


function startNextQuestion(){
showNextQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showNextQuestion(question){
 questionEl.innerText = question.question

}
//question and answer bank
var questions = [
  //question 1
  {
    question: "What does CSS mean?",

    answers: [ {text: "Color Sample Sheet", correct: false}, 
     {text:"Cool Styling Sample", correct: false},
     {text:"Couples Stlye Sheet", correct: false}, 
     {text:"Cascading Style Sheet", correct: true}]

  },
  //question 2
  {
    question: "What does HTML mean?",

    answers: [ {text: "Color Sample Sheet", correct: false}, 
     {text:"Cool Styling Sample", correct: false},
     {text:"Couples Stlye Sheet", correct: false}, 
     {text:"Cascading Style Sheet", correct: true}]

  }
  
];






//start question 2
//start question 3
//start question 4
//start question 5
