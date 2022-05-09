var questions = 0;
var score = 0;

for (var i = 0; i < questions.length; i++) {
    let response = window.prompt(questions[i].prompt(questions))

    if(response == questions[i].answer){
    score++;
    alert("Nice job!")}
    else{

        alert("Wrong answer!")
    }

}


//quiz start function
var startQuiz = document.querySelector('btn-primary')


startQuiz.addEventListener('click', function(
     
    {

    


});
)