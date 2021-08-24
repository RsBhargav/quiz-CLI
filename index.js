var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "sai",
    score: 3,
  },

  {
    name: "neel",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Who or what is Mercury named after?",
  answer: "Roman messenger of gods"
}, {
  question: "How long is a year on Mercury? ",
  answer: "88"
},
{
  question: "Because it is closest planet to the sun, the temperature on mercury is hot all the time? true or false ",
  answer: "false"
}, {
  question: "how were the craters on the surface of mercury created? ",
  answer: "asteroids"
}, {
  question: "How many space craft have visted Mercury?",
  answer: "2"
}, {
  question: "which of these is NOT the name of a crater on Mercury?",
  answer: "disney"
}, {
  question: "how many moons does the mercury have? ",
  answer: "0"
}, {
  question: "How long is a day on Mercury? ",
  answer: "59"
}, {
  question: "How big is Mercury. is it bigger than moon? yes or no ",
  answer: "yes"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to do mercury quiz?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
