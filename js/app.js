
/////////////////////////////////////////// start the game
function startGame(){

 $('#gameBoard').css("background-image", "url(imgs/PressStart.jpg)");

  setMessage("Welcome to You Guess It!");
  setQuestion(" Please choose Start Game!")
  $('.difficultyBoxH').empty();
  $('.difficultyBoxM').empty();
  $('.difficultyBoxE').empty();



}
startGame();

/////////////////////////////// creates set question needed functions
function setQuestion(ques){
 $('#question').text(ques);
}
///////////////////////////// creates chooseDifficulty
function chooseDifficulty(){
  setMessage("Please choose your difficulty")

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
  setQuestion(sportsQuestions.question);


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

var sportsQuestions = {question: 'Where do the Lakers play?', a: 'Staples Center', b: 'Clippers center', c:'My Moms house', d:'Taco Bell Arena'};
