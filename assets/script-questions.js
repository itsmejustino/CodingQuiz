var timerEL = document.getElementById("time-left");
var countdown = 15;


var startTimer = setInterval(function () {
  countdown--;
  timerEL.textContent = countdown;
  if (countdown <= 0) {
    clearInterval(startTimer);
  }
  if (countdown <= 5) {
   timerEL.setAttribute("style", "color: red;")
  }
}, 1000);


//score tracker
var score = 0;
//start question 1
var question1 = document.getElementById('question')
question1.textContent = "What does HTML mean?";

if(countdown == 0){
score = 0;
}
//question1 choices
var questionChoice1= document.getElementById('choice-1')
var questionChoice2 = document.getElementById('choice-2')
var questionChoice3 = document.getElementById('choice-3')
var questionChoice4 = document.getElementById('choice-4')

questionChoice1.textContent = "Happy Text Makes Language"
questionChoice2.textContent = "Hyper Text Makes Language"
questionChoice3.textContent = "Hyper Text Markup Language"
questionChoice4.textContent = "Hyper Testing Made Language"
 
var correctAnswer = document.querySelector(".btn-btn3").addEventListener("click", function()
{
score++;

console.log(score);
});

var incorrectAnswers = document.querySelectorAll(".btn-btn2, .btn-btn4, .btn-btn1");

incorrectAnswers.forEach(function(button){
button.addEventListener("click", () =>
{     score--
    console.log(score);}

)
});





//start question 2
//start question 3
//start question 4
//start question 5

