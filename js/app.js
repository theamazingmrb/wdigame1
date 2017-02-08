
/////////////////////////////////////////// start the game
function startGame(){

 //$('#gameBoard').css("background-image", "url(imgs/PressStart.jpg)");

  setMessage("Welcome to You Guess It!");
  setQuestion(" Please choose Start Game!")
  $('.difficultyBoxH').hide();
  $('.difficultyBoxM').hide();
  $('.difficultyBoxE').hide();
  $('#gameBoard').css("background-image", "none");



}
startGame();

/////////////////////////////// creates set question needed functions
function setQuestion(ques){
 $('#question').text(ques);
}
///////////////////////////// creates chooseDifficulty
function chooseDifficulty(){
  setMessage("Please choose your difficulty")

  $('.difficultyBoxH').show();
  $('.difficultyBoxM').show();
  $('.difficultyBoxE').show();

  setQuestion("") // this works to change the text
  $('.difficultyBoxH').css("background-color","white").text("Hard")



  $('.difficultyBoxM').css("background-color","orange").text("Medium")


  $('.difficultyBoxE').css("background-color","blue").html("Easy")






}

//////////////////////////////// difficuty functions
$('.difficultyBoxE').click(function setEasyQuestions(){


  setMessage("Easy it is");

  /// $('#divID').css("background-image", "url(/myimage.jpg)");

  // $('quest')
  $('.difficultyBoxH').css("background-color", "white").html("MICHAEL JACKSON");
  $('.difficultyBoxM').css("background-color", "white").text("TACOBELL");
  $('.difficultyBoxE').css("background-color", "white").html("SPORTS").click(setSportsQ);


  $('#question').text("Please chooose a Catagory");
  //var catagory = [ cat1, cat2, cat3]


})
/////////////////////////////// sportsQuestions
function setSportsQ(){
  setMessage("Question 1")


  setQuestion(sportsQuestion1.question);
  $('.difficultyBoxH').css("background-color", "white").text("C: " + sportsQuestion1.c);
  $('.difficultyBoxM').css("background-color", "white").text("B: " + sportsQuestion1.b);
  $('.difficultyBoxE').css("background-color", "white").text("A: " + sportsQuestion1.correct);
  $('.difficultyBoxE').click(correctAnswer);
  $('.difficultyBoxM').click(wrongAnswer);
  $('.difficultyBoxH').click(wrongAnswer);

}
///////////////////questtion 2

function setSportsQ2(){
  setMessage("Question 2")
  $('#gameBoard').css("background-image", "none");



  setQuestion(sportsQuestion2.question);
  $('.difficultyBoxH').css("background-color", "white").text("C: " + sportsQuestion2.c);
  $('.difficultyBoxM').css("background-color", "white").text("B: " + sportsQuestion2.b);
  $('.difficultyBoxE').css("background-color", "white").text("A: " + sportsQuestion2.correct);

  $('.difficultyBoxH').show()
  $('.difficultyBoxM').show()
  $('.difficultyBoxE').show()

  $('.difficultyBoxE').click(correctAnswer);
  $('.difficultyBoxM').click(wrongAnswer);
  $('.difficultyBoxH').click(wrongAnswer);

}
/////////////// correct function
function correctAnswer(){


    setMessage("YAY")
    setQuestion("")
    $('.difficultyBoxH').hide()
    $('.difficultyBoxM').hide()
    $('.difficultyBoxE').hide()
    $('#gameBoard').css("background-image", "url(imgs/correct1.jpeg)");

    setTimeout( function(){
    nextQuestion()
  }  , 5000 );

 }

 /////////////////////////nextQuestion function
 function nextQuestion(){
   $('#gameBoard').css("background-image", "none");
   setMessage("Next Question in 5 seconds")
   setTimeout( function(){

     setSportsQ2()

   }  , 5000 );


 }

 /////////////wrong answer
 function wrongAnswer(){


     setMessage("BOOOOOOOOOOOO")
     setQuestion("")
     $('.difficultyBoxH').hide()
     $('.difficultyBoxM').hide()
     $('.difficultyBoxE').hide()
     $('#gameBoard').css("background-image", "url(imgs/incorrect3.jpg)");

     setTimeout( function(){
      setSportsQ2()
   }  , 5000 );

  }

//////////////////////// sets message function


function setMessage(msg){

  $('#message').text(msg);
}

//////////////////// creates hoover over buttons
$('.button').hover(function(){
  $(this).fadeOut(500).slideDown(500)
});


//////////////////////////creats click for both buttons reset and new game
$('.button:first').click(function(){
  startGame();
  $('#bigBoard').css("background-color", "black")
  chooseDifficulty();
  $()

});
$('.button:last').click(function(){
   startGame();
});
//////////////////////////////////////////////////// Game LOGIX

var sportsQuestion1 = {question: 'Where do the Lakers play?', correct: 'Staples Center', b: 'Clippers center', c:'My Moms house', d:'Taco Bell Arena'};
var sportsQuestion2 = {question: 'Where do the Dodgers play?', correct: 'Dodger Field', b: 'Dodgers center', c:'Dodger Stadium', d:'Taco Bell Arena'};
