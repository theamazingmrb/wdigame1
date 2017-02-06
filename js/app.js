console.log("wtf b")


$('.button').hover(function(){
  $(this).fadeOut(500).slideDown(500)
});
$('.button:first').click(function(){
  alert("you clicked New Game")
});
$('.button:last').click(function(){
  alert("you clicked Rematch")
});
$('html').onload = function(){
  console.log("onload worked")
}

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

  var showQuestions = function(){
    $('#gameBoard').innerhtml(sportsQuestions).eq(0).eq(1);
  }
  showQuestions();

////////////Lets start the game
function startGame(){

}
