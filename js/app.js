
/////////////////////////////////////////// start the game
function startGame(){
  $('<img src="imgs/PressStart.jpg">').appendTo(".gameBoard"); 


  setMessage("Welcome to You Guess It!");
  setQuestion(" Please choose Start Game!")
  $('.difficultyboxH').remove();
  $('.difficultyboxM').remove();
  $('.difficultyboxE').remove();



}
startGame();

/////////////////////////////// creates set question needed functions
function setQuestion(ques){
 $('#question').text(ques);
}
///////////////////////////// creates chooseDifficulty
function chooseDifficulty(){
  setMessage("Please choose your difficulty")

  setQuestion("Easy, " + " Medium," + " Hard") // this works to change the text
  var hard = $('<div class="difficultyboxH"></div>').css("background-color","white").text("Hard")
  $('.difficultyBoxH').append(hard);


var medium = $('<div class="difficultyboxM"></div>').css("background-color","orange").text("Medium")
$('.difficultyBoxM').append(medium);

var easy = $('<div class="difficultyboxE"></div>').css("background-color","blue").text("Easy")
$('.difficultyBoxE').append(easy);



}

//////////////////////////////// difficuty functions
$('.difficultyBoxE').click(function setEasyQuestions(){


  setMessage("Easy it is");
  $('gameBoard').
  $('.difficultyboxH').remove();
  $('.difficultyboxM').remove();
  $('.difficultyboxE').remove();
  $('#question').text(sportsQuestions);
})




//////////////////////// sets message function


function setMessage(msg){

  $('#message').text(msg);
}

//////////////////// creates hoover over buttons
$('.button').hover(function(){
  $(this).fadeOut(500).slideDown(500)
});


//////////////////////////creats click for both buttons
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

var sportsQuestions = [
    ["sport question 1?", "a", "b", "c", "d", "answer"],
    ["sport question 2?", "a", "b", "c", "d", "answer"],
    ["sport question 3?", "a", "b", "c", "d", "answer"],
    ["sport question 4?", "a", "b", "c", "d", "answer"],
    ["sport question 5?", "a", "b", "c", "d", "answer"],
  ]
var javascriptQuestions = [
    ["javascript question 1?", "a", "b", "c", "d", "answer"],
    ["javascript question 2?", "a", "b", "c", "d", "answer"],
    ["javascript question 3?", "a", "b", "c", "d", "answer"],
    ["javascript question 4?", "a", "b", "c", "d", "answer"],
    ["javascript question 5?", "a", "b", "c", "d", "answer"],
  ]
