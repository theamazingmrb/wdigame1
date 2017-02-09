var $clickedAnswer;
var $score = 0;
var turn = 1;
var $player1;
var $player2;
var $sportsQuestion = [
    {
      question: "Where do the Lakers play?",
      a: "Staples Center",
      b: "Clippers center",
      c: "My Moms house",
      d: "Taco Bell Arena",
      answer: "a"
    },
   {
    question: "Where do the Dodgers play?",
    a: "Dodger Field",
    b: "Dodgers center",
    c: "Dodger Stadium",
    d: "Taco Bell Arena",
    answer: "c"
  },
  {
  question: "What sport does Lionel Messy play",
  a: "FootBall",
  b: "BaseBall",
  c: "Soccer",
  d: "LaCross",
  answer: "c"
  },
  {
  question: "What Year did Kobe Bryant Retire",
  a: "2016",
  b: "2020",
  c: "GOAT",
  d: "2015",
  answer: "a",
  }
]

/////////////////////////////////////////// start the game
function startGame() {

  //$('#gameBoard').css("background-image", "url(imgs/PressStart.jpg)");

  messageBox("Welcome to You Guess It!");
  questionBox(" Please choose Start Game!");
  $('#gameBoard').css("background-color", "blue");


}
  $('#p1score').text("Player 1 Score:" + $score);
//  $('#p2score').text("Player 2 Score:" + $score);
startGame();

/////////////////////////////// creates set question needed functions
function questionBox(ques) {

  $('#answers').text(ques);
}
// //////////////////////// sets message function

function messageBox(msg) {

  $('#message').text(msg);
}

///////////working with start and reset B
$('.button:first').click(function() {
  $('#bigBoard').css("background-color", "blue")
  newGame()



});

$('.button:last').click(function() {
  startGame();
});
///////////////////////////new Game
function newGame(){
  var currentQuestion = $sportsQuestion.splice(Math.floor(Math.random() * $sportsQuestion.length), 1)[0];
  var $ul = $('<ul>');


$('#message').text("")
questionBox(currentQuestion.question)
  //messageBox(currentQuestion.question)
    // $('#answers').text("")
  $('#answers').append($ul)

  $ul.append('<li>' + currentQuestion.a + '</li>')
  $ul.append('<li>' + currentQuestion.b+ '</li>')
  $ul.append('<li>' + currentQuestion.c+ '</li>')
  $ul.append('<li>' + currentQuestion.d+ '</li>')

/////////////////funciton for correct answers
$('li').click(function(){
   $clickedAnswer = $(this).text()
   if($clickedAnswer === currentQuestion[currentQuestion.answer]){

     messageBox("Correct, next Question in 5 seconds");

    // $('#bigBoard').css("background-image", ("url(imgs/correct3.png)"))
    setTimeout(function(){

       newGame()
    }, 5000);
      $score++;
        whoWon();
      $('#p1score').text("Player 1 Score:" + $score);

 }
  else{
    messageBox("Nope, next Question in 5 second ")


    setTimeout(function(){
       newGame()
    }, 5000);

  }
})
}
function whoWon(){
//score = $('#p1score').txt;
  if($score>2){
    $('#bigBoard').css("height", "500px");
    $('#bigBoard').css("background-image", "url(imgs/we-have-a-winner.png)");
    $('ul').hide();
    $('#gameBoard').hide();

    alert("you won!")
  }
}
  // $clickedAnswer = $(this).text()
  // if($clickedAnswer === currentQuestion[currentQuestion.answer]){


// $('li').click(function() {
//       //Make each multiple choice item clickable and correct/incorrect//
//       $playerChoice = $(this).text()
//       if ($playerChoice === currentQuestion[currentQuestion.correct]) {
//         $alert.text("That's correct! You just got healthier!")
//         $score++
//         winGame()
//       } else {
//         $alert.text("That's not correct. One step closer to death.")
//         $score--
//         winGame()
//       }
//     })



// ///////////////////////////// creates chooseDifficulty
// function chooseDifficulty() {
//   setMessage("Please choose your difficulty")
//
//   $('.difficultyBoxH').show();
//   $('.difficultyBoxM').show();
//   $('.difficultyBoxE').show();
//
//   setQuestion("") // this works to change the text
//   $('.difficultyBoxH').css("background-color", "white").text("Hard")
//
//
//
//   $('.difficultyBoxM').css("background-color", "orange").text("Medium")
//
//
//   $('.difficultyBoxE').css("background-color", "blue").html("Easy")
//
//
//
//
//
//
// }
//
// //////////////////////////////// difficuty functions
// $('.difficultyBoxE').click(function setEasyQuestions() {
//
//
//   setMessage("Easy it is");
//
//   /// $('#divID').css("background-image", "url(/myimage.jpg)");
//
//   // $('quest')
//   $('.difficultyBoxH').css("background-color", "white").html("SUPER HEROES");
//   $('.difficultyBoxM').css("background-color", "white").text("javascript");
//   $('.difficultyBoxE').css("background-color", "white").html("SPORTS").click(setSportsQ);
//
//
//   $('#question').text("Please chooose a Catagory");
//   //var catagory = [ cat1, cat2, cat3]
//
//
// })
// /////////////////////////////// sportsQuestions
// function setSportsQ() {
//   setMessage("Question 1")
//
//
//   setQuestion(sportsQuestion1.question);
//   $('.difficultyBoxH').css("background-color", "white").text("C: " + sportsQuestion1.c);
//   $('.difficultyBoxM').css("background-color", "white").text("B: " + sportsQuestion1.b);
//   $('.difficultyBoxE').css("background-color", "white").text("A: " + sportsQuestion1.correct);
//   $('.difficultyBoxE').click(correctAnswer);
//   $('.difficultyBoxM').click(wrongAnswer);
//   $('.difficultyBoxH').click(wrongAnswer);
//
// }
// ///////////////////questtion 2
//
// function setSportsQ2() {
//   setMessage("Question 2")
//   $('#gameBoard').css("background-image", "none");
//
//
//
//   setQuestion(sportsQuestion2.question);
//   $('.difficultyBoxH').css("background-color", "white").text("C: " + sportsQuestion2.c);
//   $('.difficultyBoxM').css("background-color", "white").text("B: " + sportsQuestion2.b);
//   $('.difficultyBoxE').css("background-color", "white").text("A: " + sportsQuestion2.correct);
//
//   $('.difficultyBoxH').show()
//   $('.difficultyBoxM').show()
//   $('.difficultyBoxE').show()
//
//   $('.difficultyBoxE').click(wrongAnswer);
//   $('.difficultyBoxM').click(wrongAnswer);
//   $('.difficultyBoxH').click(correctAnswer);
//
// }
// /////////////// correct function
// function correctAnswer() {
//
//
//   setMessage("Correct")
//   setQuestion("")
//   $('.difficultyBoxH').hide()
//   $('.difficultyBoxM').hide()
//   $('.difficultyBoxE').hide()
//   $('#gameBoard').css("background-image", "url(imgs/correct1.jpeg)");
//
//   setTimeout(function() {
//     nextQuestion()
//   }, 3000);
//
// }
//
// /////////////////////////nextQuestion function
// function nextQuestion() {
//   $('#gameBoard').css("background-image", "none");
//   setMessage("Next Question in 5 seconds")
//   setTimeout(function() {
//
//     setSportsQ2()
//
//   }, 5000);
//
//
// }
//
// /////////////wrong answer
// function wrongAnswer() {
//
//
//   setMessage("Wrong")
//   setQuestion("")
//   $('.difficultyBoxH').hide()
//   $('.difficultyBoxM').hide()
//   $('.difficultyBoxE').hide()
//   $('#gameBoard').css("background-image", "url(imgs/incorrect3.jpg)");
//
//   setTimeout(function() {
//     nextQuestion()
//   }, 3000);
//
// }
//
// //////////////////////// sets message function
//
//
// function setMessage(msg) {
//
//   $('#message').text(msg);
// }

// //////////////////// creates hoover over buttons
// $('.button').hover(function() {
//   $(this).fadeOut(500).slideDown(500)
// });
//
//
// //////////////////////////creats click for both buttons reset and new game
// $('.button:first').click(function() {
//   $('#bigBoard').css("background-color", "black")
//
//
//
// });
//
// $('.button:last').click(function() {
//   startGame();
// });
//////////////////////////////////////////////////// Game LOGIX
