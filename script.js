// HTML Elements
let start = document.getElementById("start-button");
let quiz = document.getElementById("quiz");
let timer = document.getElementById("timer");
let counter = document.getElementById("counter");
let questionTitle = document.getElementById("question-box");
let options = document.getElementById("options");
let ansOne = document.getElementById("one");
let ansTwo = document.getElementById("two");
let ansThree = document.getElementById("three");
let ansFour = document.getElementById("four");



// variables

let questionLength = questions.length - 1;
let currentQuestion = 0;
let startTime = 0;
let countdownStartTime= 15*questions.length

// Start Quiz and counter
counter.innerHTML = startTime
start.addEventListener('click', function(){
    presentQuestion();
    start.style.display = "none";
    quiz.style.display = "block";
    options.style.display ="block";
    let countDown = setInterval(function(){
        counter.innerHTML = countdownStartTime;
        countdownStartTime -= 1;
        if (countdownStartTime < 0){
            clearInterval(countDown);
        }
    }, 1000);
    
});





// display Question
let askedQuestion = questions[currentQuestion];
function presentQuestion (){
    // let askedQuestion = questions[currentQuestion];
    

    questionTitle.innerHTML =askedQuestion.title;

    ansOne.innerHTML = askedQuestion.choices[0];
    ansTwo.innerHTML = askedQuestion.choices[1];
    ansThree.innerHTML = askedQuestion.choices[2];
    ansFour.innerHTML = askedQuestion.choices[3];
    
};

function checkAnswer(selection){
    if (selection == questions[currentQuestion].answer){
        console.log('correct');
    }
}

    













