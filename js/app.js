var $clickedAnswer;
$('html,body').css('cursor', 'crosshair');
var $score = 0;
var $wrongAnswer = 0;
var turn = 1;
var $player1;
var $player2;
var $sportsQuestion = [{
    question: "Where do the Lakers play?",
    a: "Staples Center",
    b: "Clippers center",
    c: "Your Moms house",
    d: "The Staple Palace",
    answer: "a"
  },
  {
    question: "Which sport did George Washington play with his troops? ",
    a: "Quidditch",
    b: "Baseball",
    c: "Cricket",
    d: "Horse Races",
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
    question: "After retiring as a player, with which team did baseball great Babe Ruth spend one year as a coach?",
    a: "Yankees",
    b: "Dodgers",
    c: "RedSox",
    d: "Braves",
    answer: "b",
  },
  {
    question: "Who won the Wolrd Cup in 2014?",
    a: "Germany",
    b: "USA",
    c: "Spain",
    d: "Brazil",
    answer: "a",
  },
  {
    question: "What number did Michael Jordan never wear proffesionally",
    a: "45",
    b: "12",
    c: "23",
    d: "9",
    answer: "d",
  },
  {
    question: "Which quarterback does not have at least 4 wins in a superbowl?",
    a: "Terry Bradshaw",
    b: "Peyton Manning",
    c: "Joe Montana",
    d: "Tom Brady",
    answer: "b",
  },
  {
    question: "What is the most amount of points a single player has scored in a NBA game",
    a: "100",
    b: "93",
    c: "78",
    d: "81",
    answer: "a",
  },
  {
    question: "What number lies between 5 and 9 on a British dart board?",
    a: "11",
    b: "9",
    c: "10",
    d: "12",
    answer: "d",
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
var $mathQuestion = [{
    question: "2 * 10=",
    a: "20",
    b: "12",
    c: "2012",
    d: "I graduated a long time ago",
    answer: "a"
  },
  {
    question: "10 + 2(10*10)? ",
    a: "200",
    b: "190",
    c: "210",
    d: "240",
    answer: "c"
  },
  {
    question: "Solve for x: x+1 = 3",
    a: "F",
    b: "BaseBall",
    c: "Soccer",
    d: "LaCross",
    answer: "c"
  },
  {
    question: "If apples===oranges, and oranges===tacos, what color is purple?",
    a: "purple",
    b: "oranges",
    c: "Tacos + Oranges",
    d: "apples",
    answer: "a",
  },
  {
    question: "Who won the Wolrd Cup in 2014?",
    a: "Germany",
    b: "USA",
    c: "Spain",
    d: "Brazil",
    answer: "a",
  },
  {
    question: "What number did Michael Jordan never wear proffesionally",
    a: "45",
    b: "12",
    c: "23",
    d: "9",
    answer: "d",
  },
  {
    question: "Which quarterback does not have at least 4 wins in a superbowl?",
    a: "Terry Bradshaw",
    b: "Peyton Manning",
    c: "Joe Montana",
    d: "Tom Brady",
    answer: "b",
  },
  {
    question: "What is the most amount of points a single player has scored in a NBA game",
    a: "100",
    b: "93",
    c: "78",
    d: "81",
    answer: "a",
  },
  {
    question: "What number lies between 5 and 9 on a British dart board?",
    a: "11",
    b: "9",
    c: "10",
    d: "12",
    answer: "d",
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

///////////working with start button
$('.button:first').click(function() {
  $('#bigBoard').css("background-color", "blue")
  newGame()



});
////////////// reset button
$('.button:last').click(function() {
  reloadPage();

  function reloadPage() {
    window.location.reload();
  }


  startGame()

});
///////////////////////////new Game
function newGame() {
  messageBox("Please choose a Catagory")
  //$('#gameBoard').css("background-image", "url(imgs/PressStart.jpg)");
  $('#answers').text("").append('<div id="sportBox" class="difficultybox">SPORTS</div>');
  $('#sportBox').css("background-color", "#e8e8e8");
  $('#sportBox').css("height", "100px");
  $('#sportBox').css("width", "200px");
  $('#sportBox').on("click", function() {
  $('#sportBox').unbind("click");
    catagoryChoice($sportsQuestion)
  });

  $('#answers').append('<div id="mathBox" class="difficultybox">MATH</div>');
  $('#mathBox').css("background-color", "#e8e8e8");
  $('#mathBox').css("height", "100px");
  $('#mathBox').css("width", "200px");

  $('#mathBox').on("click", function() {
    $('#math').unbind("click");
    catagoryChoice($mathQuestion);
  });

  function catagoryChoice(catagory) {
   if (catagory.length > 1) {

      var currentQuestion = catagory.splice(Math.floor(Math.random() * catagory.length), 1)[0];
      var $ul = $('<ul>');
      $('#message').text("")
      questionBox(currentQuestion.question)
      //messageBox(currentQuestion.question)
      // $('#answers').text("")
      $('#answers').append($ul)

      $ul.append('<li>' + currentQuestion.a + '</li>')
      $ul.append('<li>' + currentQuestion.b + '</li>')
      $ul.append('<li>' + currentQuestion.c + '</li>')
      $ul.append('<li>' + currentQuestion.d + '</li>')

      $('li').click(function() {
        //whoWon();
        $clickedAnswer = $(this).text()
        if ($clickedAnswer === currentQuestion[currentQuestion.answer]) {

          messageBox("Correct, next Question in 3 seconds");

          // $('#bigBoard').css("background-image", ("url(imgs/correct3.png)"))
          setTimeout(function() {

            catagoryChoice(catagory)

          }, 3000);
          $score++;
          whoWon();
          $('#p1score').text("Player 1 Score:" + $score);

        } else if ($clickedAnswer !== currentQuestion[currentQuestion.answer]) {
          //whoWon();
          messageBox("Nope, next Question in 3 second ")
          questionBox("The Correct Answer is : " + currentQuestion[currentQuestion.answer])
          $wrongAnswer++;
          whoWon();

          setTimeout(function() {
            catagoryChoice(catagory)
          }, 3000);

        } else {
          messageBox("Next Catagory in 3 seconds ")
          questionBox("")


          setTimeout(function() {
            newGame()
          }, 3000);

        }



      })
    }
    else{
      newGame();
    }
  }

  function whoWon() {

    //score = $('#p1score').txt;
    if ($score > 10) {
      messageBox("Congrats you won!!")
      $('#bigBoard').css("height", "500px")
      $('#bigBoard').css("background-image", "url(imgs/we-have-a-winner.png)")
      //newGame.stop();
      $('ul').hide()
      $('#gameBoard').remove();

      alert("you won!")
    }
    if ($wrongAnswer === 5) {
      messageBox("You Failed")
      $('#bigBoard').css("height", "500px")
      $('#bigBoard').css("background-image", "url(imgs/loserimg.jpg)")
      $('ul').hide()
      $('#gameBoard').remove();
      alert("it overrrrrrr");
    }
  }
}
  // ////////////////////.......................mathQ
  // function mathQ(){
  //
  //   var currentQuestion = $mathQuestion.splice(Math.floor(Math.random() * $mathQuestion.length), 1)[0];
  //   var $ul = $('<ul>');
  //
  //
  // $('#message').text("")
  // questionBox(currentQuestion.question)
  //   //messageBox(currentQuestion.question)
  //     // $('#answers').text("")
  //   $('#answers').append($ul)
  //
  //   $ul.append('<li>' + currentQuestion.a + '</li>')
  //   $ul.append('<li>' + currentQuestion.b+ '</li>')
  //   $ul.append('<li>' + currentQuestion.c+ '</li>')
  //   $ul.append('<li>' + currentQuestion.d+ '</li>')
  //
  //
  // $('li').click( function(){
  //    //whoWon();
  //    $clickedAnswer = $(this).text()
  //    if($clickedAnswer === currentQuestion[currentQuestion.answer]){
  //
  //      messageBox("Correct, next Question in 5 seconds");
  //
  //     // $('#bigBoard').css("background-image", ("url(imgs/correct3.png)"))
  //     setTimeout(function(){
  //        sportsQ()
  //     }, 5000);
  //       $score++;
  //         whoWon();
  //       $('#p1score').text("Player 1 Score:" + $score);
  //
  //  }
  //   else if($clickedAnswer !== currentQuestion[currentQuestion.answer]){
  //     whoWon();
  //     messageBox("Nope, next Question in 5 second ")
  //     questionBox("The Correct Answer is : "+ currentQuestion[currentQuestion.answer])
  //
  //     $wrongAnswer++;
  //     whoWon();
  //     setTimeout(function(){
  //        sportsQ()
  //     }, 5000);
  //
  //   }
  //   else{
  //     messageBox("Next Catagory in 3 seconds ")
  //     questionBox("")
  //
  //
  //     setTimeout(function(){
  //        newGame()
  //     }, 3000);
  //
  //   }
  //
  //
  //
  // })
  //  }
  //






  //}
  //////////////////////////////.......................... sports Questions
  // function sportsQ(){
  // if($sportsQuestion.length>1){
  //   var currentQuestion = $sportsQuestion.splice(Math.floor(Math.random() * $sportsQuestion.length), 1)[0];
  //   var $ul = $('<ul>');
  // $('#message').text("")
  // questionBox(currentQuestion.question)
  //   //messageBox(currentQuestion.question)
  //     // $('#answers').text("")
  //   $('#answers').append($ul)
  //
  //   $ul.append('<li>' + currentQuestion.a + '</li>')
  //   $ul.append('<li>' + currentQuestion.b+ '</li>')
  //   $ul.append('<li>' + currentQuestion.c+ '</li>')
  //   $ul.append('<li>' + currentQuestion.d+ '</li>')
  //
  //   $('li').click(function(){
  //      //whoWon();
  //      $clickedAnswer = $(this).text()
  //      if($clickedAnswer === currentQuestion[currentQuestion.answer]){
  //
  //        messageBox("Correct, next Question in 3 seconds");
  //
  //       // $('#bigBoard').css("background-image", ("url(imgs/correct3.png)"))
  //       setTimeout(function(){
  //
  //          sportsQ()
  //       }, 3000);
  //         $score++;
  //           whoWon();
  //         $('#p1score').text("Player 1 Score:" + $score);
  //
  //    }
  //     else if($clickedAnswer !== currentQuestion[currentQuestion.answer]){
  //       //whoWon();
  //       messageBox("Nope, next Question in 3 second ")
  //       questionBox("The Correct Answer is : "+ currentQuestion[currentQuestion.answer])
  //       $wrongAnswer++ ;
  //       whoWon();
  //
  //       setTimeout(function(){
  //          sportsQ()
  //       }, 3000);
  //
  //     }
  //     else{
  //       messageBox("Next Catagory in 3 seconds ")
  //       questionBox("")
  //
  //
  //       setTimeout(function(){
  //          newGame()
  //       }, 3000);
  //
  //     }
  //
  //
  //
  //   })
  // }
  // if($sportsQuestion.length<1){
  // alert("jeoijfowowgowgho")
  //
  // }
  // }
  // ////////////////////.......................mathQ
  // function mathQ(){
  //
  //   var currentQuestion = $mathQuestion.splice(Math.floor(Math.random() * $mathQuestion.length), 1)[0];
  //   var $ul = $('<ul>');
  //
  //
  // $('#message').text("")
  // questionBox(currentQuestion.question)
  //   //messageBox(currentQuestion.question)
  //     // $('#answers').text("")
  //   $('#answers').append($ul)
  //
  //   $ul.append('<li>' + currentQuestion.a + '</li>')
  //   $ul.append('<li>' + currentQuestion.b+ '</li>')
  //   $ul.append('<li>' + currentQuestion.c+ '</li>')
  //   $ul.append('<li>' + currentQuestion.d+ '</li>')
  //
  //
  // $('li').click( function(){
  //    //whoWon();
  //    $clickedAnswer = $(this).text()
  //    if($clickedAnswer === currentQuestion[currentQuestion.answer]){
  //
  //      messageBox("Correct, next Question in 5 seconds");
  //
  //     // $('#bigBoard').css("background-image", ("url(imgs/correct3.png)"))
  //     setTimeout(function(){
  //        sportsQ()
  //     }, 5000);
  //       $score++;
  //         whoWon();
  //       $('#p1score').text("Player 1 Score:" + $score);
  //
  //  }
  //   else if($clickedAnswer !== currentQuestion[currentQuestion.answer]){
  //     whoWon();
  //     messageBox("Nope, next Question in 5 second ")
  //     questionBox("The Correct Answer is : "+ currentQuestion[currentQuestion.answer])
  //
  //     $wrongAnswer++;
  //     whoWon();
  //     setTimeout(function(){
  //        sportsQ()
  //     }, 5000);
  //
  //   }
  //   else{
  //     messageBox("Next Catagory in 3 seconds ")
  //     questionBox("")
  //
  //
  //     setTimeout(function(){
  //        newGame()
  //     }, 3000);
  //
  //   }
  //
  //
  //
  // })
  //  }

  /////////////////funciton for correct answers




  // timeer attempt
  // function countdown(secs, elem){
  //   var element = $('#elem')
  //   element.innerHTML = secs;
  //   secs--;
  //   var timer = setTimeout('countdown('+secs+',"'+elem+')',1000);
  //
  //
  //
  // }
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
