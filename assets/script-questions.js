
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




totalQuestionCounter.textContent = "4 ";
var questionCounter = 1;
Counter.textContent = questionCounter;
nextButton.addEventListener("click", () => {
  questionCounter++;
  console.log(questionCounter);
  Counter.textContent = questionCounter;
  countdown = 15;
  showNextQuestion()
});

//start game function
var questionEl= document.getElementById("question");
var answerButtons = document.getElementById("answer-btn");


let randomQuestions; 
let currentQuestionsIndex = 0;

function startQuiz(){
console.log("Quiz started")
randomQuestions = questions.sort(() => Math.random() - .5);
currentQuestionsIndex;
}


function startNextQuestion(){
showNextQuestion(randomQuestions[currentQuestionsIndex])
}

function showNextQuestion(question){
 questionEl.textContent = questions.question;
 question.answers.forEach( answers => {
let button= document.createElement("button");
button.innerText = answers.text
button.classList.add('btn')
if (answers.correct) {
button.dataset.correct = answers.correct

}
 button.addEventListener('click', chooseAnswer)
 answerButtonElement.appendChild(button)
 })

}

function chooseAnswer(e){


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
