
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
var answerButton1 = document.getElementById("btn-btn1");
var answerButton2 = document.getElementById("btn-btn2");
var answerButton3 = document.getElementById("btn-btn3");
var answerButton4 = document.getElementById("btn-btn4");

let randomQuestions; 
let currentQuestionsIndex = 0;



function startQuiz(){
console.log("Quiz started")
randomQuestions = questions.sort(() => Math.random() - .5);
currentQuestionsIndex;
displayQuestions();
}

//function displays question from answer bank array
function displayQuestions(){
  console.log(questions[currentQuestionsIndex].answer1)
answerButton1.innerText = questions[currentQuestionsIndex].answer1

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

    answer1:"Color Sample Sheet", 
    answer2:"Cool Styling Sample", 
    answer3:"Couples Stlye Sheet", 
    answer4:"Cascading Style Sheet",
    correctanswer: "Cascading Style Sheet"
    

  },
  //question 2
  {
    question: "What does CSS mean?",

    answer1:"Color Sample Sheet", 
    answer2:"Cool Styling Sample", 
    answer3:"Couples Stlye Sheet", 
    answer4:"Cascading Style Sheet",
    correctanswer: "Cascading Style Sheet"
    

  },
];

startQuiz();