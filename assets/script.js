
//score tracker
var userScore = document.querySelector(".score-value");
var userNameEvent = document.querySelector(".scorer-name-event");
var userName = document.querySelector(".scorer-name");
var scoreList = document.querySelector(".highscore");



let scoreBtn = document.querySelector(".add-score-btn");
var storedScore = localStorage.getItem("score");
//on click event to add score from localStorage
scoreBtn.addEventListener("click", function scoreTracker() {
  var text = userName.value;
  console.log(scoreBtn);
  var li = document.createElement("li");
  li.innerHTML= text + ": " + storedScore;
  li.setAttribute("id", "score-value"); // added line
  scoreList.appendChild(li);
  console.log(li.id);
  console.log(window.localStorage)

});



