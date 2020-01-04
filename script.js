// HTML Elements
const welcome = document.getElementById("intro")
const start = document.getElementById("start-button");
const quiz = document.getElementById("quiz");
const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const questionTitle = document.getElementById("question-box");
const options = document.getElementById("options");
const ansOne = document.getElementById("one");
const ansTwo = document.getElementById("two");
const ansThree = document.getElementById("three");
const ansFour = document.getElementById("four");
const result = document.getElementById("right-wrong");
const scoreboard = document.getElementById("score")



// variables

let questionLength = questions.length - 1;
let currentQuestion = 0;
let startTime = 0;
let countdownStartTime= 15*questions.length
let score = 0;


// Start Quiz and counter
counter.innerHTML = startTime
start.addEventListener('click', function(){
    presentQuestion();
    start.style.display = "none";
    welcome.style.display ="none";
    quiz.style.display = "block";
    options.style.display ="block";
    let countDown = setInterval(function(){
        counter.innerHTML = countdownStartTime;
        countdownStartTime -= 1;
        if (countdownStartTime < 0){
            clearInterval(countDown);
            quiz.style.display="none";
            options.style.display="none";
            result.style.display="none";
            let initials = prompt("The Quiz is over, please enter your intials");
            scoreboard.innerHTML = initials + " - " 
            + score;

        }
    }, 1000);
    
});

// display Question

function presentQuestion (){
    let askedQuestion = questions[currentQuestion];
    

    questionTitle.innerHTML =askedQuestion.title;

    ansOne.innerHTML = askedQuestion.choices[0];
    ansTwo.innerHTML = askedQuestion.choices[1];
    ansThree.innerHTML = askedQuestion.choices[2];
    ansFour.innerHTML = askedQuestion.choices[3];
    
};

// check answer and result
function checkAnswer(selection){
    if (selection == questions[currentQuestion].answer){
        score++;
        result.innerHTML = "<hr>" + "Correct!"
    }
    else{
        // console.log('wrong');

        result.innerHTML = "<hr>" + "Wrong!"

    }

    if (currentQuestion < questionLength){
        currentQuestion++;
        presentQuestion();
    }
    else{
        quiz.style.display="none";
        options.style.display="none";
        result.style.display="none";
        let initials = prompt("The Quiz is over, please enter your intials");
        scoreboard.innerHTML = initials + " - " 
            + score;
        clearInterval(countdownStartTime);

    }




}

    













