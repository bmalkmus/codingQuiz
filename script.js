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
const scoreboard = document.getElementById("score");
const highScoresList =document.getElementById("highscores");



// variables

let questionLength = questions.length - 1;
let currentQuestion = 0;
let startTime = 0;
let countdownStartTime= 15*questions.length
let score = 0
let countDown
let initials
let resultant
let highScoreResult
let scoreArray
let finalArray
let object23

// Start Quiz and counter
counter.innerHTML = startTime

start.addEventListener('click', function(){
    presentQuestion();
    start.style.display = "none";
    welcome.style.display ="none";
    quiz.style.display = "block";
    options.style.display ="block";
    countDown = setInterval(function(){
        counter.innerHTML = countdownStartTime;
        countdownStartTime -= 1;
        if (countdownStartTime < 0){
            quiz.style.display="none";
        options.style.display="none";
        result.style.display="none";
        score=countdownStartTime;
        initials = prompt("The Quiz is over, please enter your intials");
        scoreboard.innerHTML = initials + " = " 
            + score;

        clearInterval(countDown);
        timer.style.display="none";
            
            

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
        result.innerHTML = "<hr>" + "Correct!"
    }
    else{

        result.innerHTML = "<hr>" + "Wrong!"
        clearInterval(countDown);
        countdownStartTime = countdownStartTime-15;
        countDown = setInterval(function(){
            counter.innerHTML = countdownStartTime;
            countdownStartTime -= 1;
            if (countdownStartTime < 0){

                saveScore();
                
                
    
            }
        }, 1000);
        


    }

    if (currentQuestion < questionLength){
        currentQuestion++;
        presentQuestion();
    }
    else{
        saveScore();
  
    }
};
// prompt name and score
function saveScore() {
    quiz.style.display="none";
    options.style.display="none";
    result.style.display="none";
    score =countdownStartTime;
    initials = prompt("The Quiz is over, please enter your intials");
    scoreboard.innerHTML = initials + " = " 
            + score + '<hr>';

    clearInterval(countDown);
    timer.style.display="none";
        
    resultant = {initials, score};


    
    pushScore();
};
// push score to local storage
    function pushScore() {
    highScoreResult = JSON.parse(localStorage.getItem("scores"));
    highScoreResult.push(resultant);
    localStorage.setItem('scores', JSON.stringify (highScoreResult));
    finalArray = JSON.parse(localStorage.getItem('scores'));
    finalArray.sort(function(a,b){
        return b.score - a.score
    });
    for (i = 0; i < finalArray.length; i++) {
        console.log(i);
        
         object23 = finalArray[i];
         console.log(object23);
         
        var list = document.createElement("li");
        var textList = document.createTextNode(Object.values(object23));         
        list.appendChild(textList);                              
        highScoresList.appendChild(list);

    }

    };
// print highscore when link is clicked
function list (){
    console.log(highScoresList);
    
    welcome.style.display ="none";
    start.style.display ="none";
    scoreboard.style.display ="none";
    quiz.style.display ="none";
    counter.style.display ="none";
    options.style.display ="none";
    highScoresList.style.display ="block";

}





    

// set local storage
if (!localStorage.getItem("scores")) {
    
    let scores = []
  
  localStorage.setItem('scores', JSON.stringify (scores));
};













    













