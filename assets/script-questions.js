
//set score var. collected data in this .js form. used again in script-questions
var score = 0

//Timer

var timerEL = document.getElementById('time-left')

var Counter = document.getElementById('question-counter-up')
var totalQuestionCounter = document.getElementById('question-counter-left')
var nextButton = document.getElementById('next-button')
var questionCounter = 1

var countdown = 60
var startTimer = setInterval(() => {
  countdown--
  timerEL.textContent = countdown
  if (questionCounter == totalQuestionCounter.textContent) {
    nextButton.innerText = 'End Quiz'
    nextButton.addEventListener('click', endQuiz)
  }

  if (countdown <= 0) {
    clearInterval(startTimer)
    endQuiz()
  }
  if (countdown <= 5) {
    timerEL.setAttribute('style', 'color: red;')
  }

  if (countdown >= 6) {
    timerEL.setAttribute('style', 'color: green;')
  }
}, 1000)

//question tracker

totalQuestionCounter.textContent = 5

Counter.textContent = questionCounter

autoContinue = () => {
  questionCounter++
  currentQuestionsIndex++
  currentAnswersIndex++
  Counter.textContent = questionCounter
  displayQuestion()
  displayAnswers()
}

//function executes on click of next question button.
//question counter increases by 1, showNextQuestion, and showAnswers execute on click.

questionTracker = () => {
  nextButton.addEventListener('click', () => {
    if (questionCounter == totalQuestionCounter.textContent) {
      return
    }
    questionCounter++
    currentQuestionsIndex++
    currentAnswersIndex++
    Counter.textContent = questionCounter
    displayQuestion()
    displayAnswers()
  })
}

//Quiz Start function
var randomQuestions
let currentQuestionsIndex = 0
let currentAnswersIndex = 0

function startQuiz () {
  console.log('Quiz started')
  currentQuestionsIndex
  displayQuestion()
  displayAnswers()
  questionTracker()
  chooseAnswer()
}

//Quiz end function

function endQuiz () {
  window.location.href = '../pages/page3.html'
  clearTimeout(startTimer)
}

//start game function
//question and answer bank
var questions = [
  //question 1
  {
    question: 'What does CSS mean?',

    answer1: 'Color Sample Sheet',
    answer2: 'Cool Styling Sample',
    answer3: 'Couples Stlye Sheet',
    answer4: 'Cascading Style Sheet',
    correctAnswer: 'Cascading Style Sheet'
  },
  //question 2
  {
    question: 'What does HTML mean?',

    answer1: 'Hinted Text Sheet',
    answer2: 'Hyper Text Markup Language',
    answer3: 'Helpful Text Made Language',
    answer4: 'Have Made Text Language',
    correctAnswer: 'Hyper Text Markup Language'
  },
//question 3
  {
    question: 'How many bits in a byte?',

    answer1: '2',
    answer2: '6',
    answer3: '8',
    answer4: '12',
    correctAnswer: '8'
  },
//question 4
  {
    question:
      'What is the best way to increase programming productivity when completing a project?',

    answer1: 'Spend all day working and burn-out',
    answer2: 'Psuedo-code and use your resources',
    answer3: 'Tackle the code head on and dont document',
    answer4: 'Freak out',
    correctAnswer: 'Psuedo-code and use your resources'
  },
  //question 5
  {
    question:
      'What is the definition of object oriented programming?',

    answer1: 'OOP (Object Oriented Programming) is a cleaner programming that relys on strings and syntax',
    answer2: 'A computer programming model that organizes software design around data, or objects, rather than functions and logic',
    answer3: 'Programming that uses JavaScript',
    answer4: 'Programming that focuses on the use of objects to improve performance',
    correctAnswer: 'A computer programming model that organizes software design around data, or objects, rather than functions and logic'
  }
]
//next question function used on selected answer to continue to next question
function nextQuestion () {
  if (questionCounter < totalQuestionCounter.textContent) {
    questionCounter++
    currentQuestionsIndex++
    currentAnswersIndex++
    Counter.textContent = questionCounter
    displayQuestion()
    displayAnswers()
  } else {
    return
  }
}
var questionEl = document.getElementById('question')
var answerButton1 = document.getElementById('btn-btn1')
var answerButton2 = document.getElementById('btn-btn2')
var answerButton3 = document.getElementById('btn-btn3')
var answerButton4 = document.getElementById('btn-btn4')

function displayQuestion () {
  questionEl.innerText = questions[currentQuestionsIndex].question
}

//function displays question from answer bank array
function displayAnswers () {
  console.log(questions[currentAnswersIndex].answer1)
  answerButton1.innerText = questions[currentAnswersIndex].answer1
  answerButton2.innerText = questions[currentAnswersIndex].answer2
  answerButton3.innerText = questions[currentAnswersIndex].answer3
  answerButton4.innerText = questions[currentAnswersIndex].answer4
}

function chooseAnswer () {
  answerButton1.addEventListener('click', checkAnswer1)
  answerButton2.addEventListener('click', checkAnswer2)
  answerButton3.addEventListener('click', checkAnswer3)
  answerButton4.addEventListener('click', checkAnswer4)
}


//check answers for correctAnswer
function checkAnswer1 () {
  if (answerButton1.innerText == questions[currentAnswersIndex].correctAnswer) {
    console.log('true!')
    score++
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('score ' + score)
  } else {
    countdown -= 10
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('false')
  }
}

function checkAnswer2 () {
  if (answerButton2.innerText == questions[currentAnswersIndex].correctAnswer) {
    console.log('true!')
    score++
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('score' + score)
  } else {
    countdown -= 10
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('false')
  }
}
function checkAnswer3 () {
  if (answerButton3.innerText == questions[currentAnswersIndex].correctAnswer) {
    console.log('true!')
    score++
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('score' + score)
  } else {
    countdown -= 10
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('false')
  }
}
function checkAnswer4 () {
  if (answerButton4.innerText == questions[currentAnswersIndex].correctAnswer) {
    console.log('true!')
    score++
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('score' + score)
  } else {
    countdown -= 10
    localStorage.setItem('score', score)
    nextQuestion()
    console.log('false')
  }
}

startQuiz()
