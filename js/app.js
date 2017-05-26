var $clickedAnswer;
$('html,body').css('cursor', 'crosshair');
var $score = 0;
var $wrongAnswer = 0;
var turn = 1;
var $player1;
var $sportsQuestion = [
  {
    name: "Sports",
    question: "Where do the Lakers play?",
    a: "Staples Center",
    b: "Clippers center",
    c: "Your Moms house",
    d: "The Staple Palace",
    answer: "a"
  },
  {
    name: "Sports",
    question: "Which sport did George Washington play with his troops? ",
    a: "Quidditch",
    b: "Baseball",
    c: "Cricket",
    d: "Horse Races",
    answer: "c"
  },
  {
    name: "Sports",
    question: "What sport does Lionel Messi play?",
    a: "FootBall",
    b: "BaseBall",
    c: "Soccer",
    d: "LaCross",
    answer: "c"
  },
  {
    name: "Sports",
    question: "After retiring as a player, with which team did baseball great Babe Ruth spend one year as a coach?",
    a: "Yankees",
    b: "Dodgers",
    c: "RedSox",
    d: "Braves",
    answer: "b",
  },
  {
    name: "Sports",
    question: "Who won the Wolrd Cup in 2014?",
    a: "Germany",
    b: "USA",
    c: "Spain",
    d: "Brazil",
    answer: "a",
  },
  {
    name: "Sports",
    question: "What number did Michael Jordan never wear professionally?",
    a: "45",
    b: "12",
    c: "23",
    d: "9",
    answer: "d",
  },
  {
    name: "Sports",
    question: "Which quarterback does not have at least 4 wins in a Superbowl?",
    a: "Terry Bradshaw",
    b: "Peyton Manning",
    c: "Joe Montana",
    d: "Tom Brady",
    answer: "b",
  },
  {
    name: "Sports",
    question: "What is the most amount of points a single player has scored in a NBA game?",
    a: "100",
    b: "93",
    c: "78",
    d: "81",
    answer: "a",
  },
  {
    name: "Sports",
    question: "What number lies between 5 and 9 on a British dart board?",
    a: "11",
    b: "9",
    c: "10",
    d: "12",
    answer: "d",
  },
  {
    name: "Sports",
    question: "What Year did Kobe Bryant Retire?",
    a: "2016",
    b: "2020",
    c: "GOAT",
    d: "2015",
    answer: "a",
  }
]
var $mathQuestion = [
  {
    name: "Math",
    question: "2 * 10=",
    a: "20",
    b: "12",
    c: "2012",
    d: "I graduated a long time ago",
    answer: "a"
  },
  {
    name: "Math",
    question: "10 + 2(10*10)? ",
    a: "200",
    b: "190",
    c: "210",
    d: "240",
    answer: "c"
  },
  {
    name: "Math",
    question: "Solve for x: x+1 = 3",
    a: "2",
    b: "4",
    c: "1/3",
    d: "8",
    answer: "a"
  },
  {
    name: "Math",
    question: "If apples===oranges, and oranges===tacos, what color is purple?",
    a: "purple",
    b: "oranges",
    c: "Tacos + Oranges",
    d: "apples",
    answer: "a",
  },
  {
    name: "Math",
    question: "2. If A is substituted by 4, B by 3, C by 2, D by 4, E by 3, F by 2 and so on, then what will be total of the numerical values of the letters of the word SICK?",
    a: "11",
    b: "12",
    c: "13",
    d: "14",
    answer: "a",
  },
  {
    name: "Math",
    question: " What comes after a million, billion and trillion?",
    a: "pentillion",
    b: "A zillion",
    c: "A bajillion",
    d: "A quadrillion",
    answer: "d",
  },
  {
    name: "Math",
    question: "5 to the power of 0 equals what?",
    a: "5",
    b: "1",
    c: "0",
    d: "2",
    answer: "b",
  },
  {
    name: "Math",
    question: "How many sides does a nonagon have?",
    a: "9",
    b: "0",
    c: "12",
    d: "7",
    answer: "a",
  },
  {
    name: "Math",
    question: "If you take the number 1, add 1 to it, add 2 to it, add 4 to it, and devide it by 2 what number do we now have?",
    a: "8",
    b: "7",
    c: "4",
    d: "2",
    answer: "d",
  },
  {
    name: "Math",
    question: "If there are 3 apples, and you take 2 away how many apples do you have?",
    a: "3",
    b: "1",
    c: "2",
    d: "0",
    answer: "c",
  }
]
var $5gradeQuestion = [
  {
    name: "Random",
    question: "What does the Latin affix “tend” mean as in “extend”?",
    a: "stretch",
    b: "nurture",
    c: "'ten' + 'd'",
    d: "disposed",
    answer: "a"
  },
  {
    name: "Random",
    question: "How many nouns are in the following sentence? “The rabbit ran to the cafeteria and ate a big salad”? ",
    a: "4",
    b: "2",
    c: "3",
    d: "5",
    answer: "c"
  },
  {
    name: "Random",
    question: "What is the decimal equivalent of 4/8?",
    a: ".5",
    b: ".8",
    c: ".3",
    d: ".25",
    answer: "a"
  },
  {
    name: "Random",
    question: "Which of the following is a synonym for “earn”?",
    a: "obtain",
    b: "gather",
    c: "take",
    d: "loss",
    answer: "a",
  },
  {
    name: "Random",
    question: "What is the numeric value of the Roman numeral “XIX”?",
    a: "21",
    b: "10110",
    c: "1019",
    d: "19",
    answer: "d",
  },
  {
    name: "Random",
    question: "Wolfgang Amadeus Mozart composed music during which period?",
    a: "Contemporary",
    b: "Baroque",
    c: "Classical",
    d: "Renaissance",
    answer: "c",
  },
  {
    name: "Random",
    question: "5 to the power of 0 equals what?",
    a: "5",
    b: "1",
    c: "0",
    d: "2",
    answer: "b",
  },
  {
    name: "Random",
    question: "How many sides does a nonagon have?",
    a: "9",
    b: "0",
    c: "12",
    d: "7",
    answer: "a",
  },
  {
    name: "Random",
    question: "What part of the plant is a carrot?",
    a: "Orange",
    b: "Stem",
    c: "carrot",
    d: "Root",
    answer: "d",
  },
  {
    name: "Random",
    question: "On the periodic table, what element is represented by the letters “Ti”?",
    a: "Tellurium	",
    b: "Tantalum",
    c: "Titanium",
    d: "Thalium",
    answer: "c",
  }
]
/////////////////////////////////////////// start the game
function startGame() {

  //$('#gameBoard').css("background-image", "url(imgs/PressStart.jpg)");

  messageBox("Welcome to You Guessed It");
  // $('#youGuessedIt').text("You Guessed It");
  questionBox(" Please choose Start Game!");
  $('#gameBoard').css("background-color", "#d8ecf3");


}
$('#p1score').text("Player 1 Score:" + $score);
$('#wrongAnswer').text("Incorrect:" + $wrongAnswer);
//  $('#p2score').text("Player 2 Score:" + $score);
startGame();

/////////////////////////////// creates set question needed functions
function questionBox(ques) {

  $('#answers').text(ques);
}
// //////////////////////// sets message function

function messageBox(msg) {

  $('#message').text(msg);
  $('#youGuessedIt').text("You Guessed It")
}

///////////working with start button
$('.button:first').click(function() {
  $('#bigBoard').css("background-color", "#d8ecf3")
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
  $('#mathBox').unbind("click");
    catagoryChoice($mathQuestion);
  });

  $('#answers').append('<div id="fthBox" class="difficultybox">Random</div>');
  $('#fthBox').css("background-color", "#e8e8e8");
  $('#fthBox').css("height", "100px");
  $('#fthBox').css("width", "200px");

  $('#fthBox').on("click", function() {
  $('#fthBox').unbind("click");
    catagoryChoice($mathQuestion);
  });
// selects the catagory on click
  function catagoryChoice(catagory) {
   if (catagory.length > 1) {
      var counter = 1
      var currentQuestion = catagory.splice(Math.floor(Math.random() * catagory.length), 1)[0];
      var $ul = $('<ul>');
      $('#message').text("Catagory: " + currentQuestion.name + " | " +catagory.length + " questions left")
      questionBox("Question: " + " " + currentQuestion.question)

      $('#answers').append($ul)

      $ul.append('<li>' + currentQuestion.a + '</li>')
      $ul.append('<li>' + currentQuestion.b + '</li>')
      $ul.append('<li>' + currentQuestion.c + '</li>')
      $ul.append('<li>' + currentQuestion.d + '</li>')

      $('li').click(function() {
       $('li').unbind("click");
        $clickedAnswer = $(this).text()
        // check for correct answer
        if ($clickedAnswer === currentQuestion[currentQuestion.answer]) {

          messageBox("Correct, next Question in 3 seconds");
          counter++

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
          counter++
          $wrongAnswer++;

           whoWon();
           $('#wrongAnswer').text("Incorrect:" + $wrongAnswer);

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
    if ($score >= 2) {
      messageBox("Congrats you won!!")
      $('#message').remove(); 
      $('#bigBoard').css("height", "500px")
      $('#bigBoard').css("background-image", "url(imgs/we-have-a-winner.png)")
      //newGame.stop();
      $('ul').hide()
      $('#gameBoard').remove();
      $('#buttons').remove();

      alert("you won!")
    }
    if ($wrongAnswer === 2) {
      messageBox("You Failed")
      // $('#bigBoard').css("height", "500px")
      $('#bigBoard').css("background-image", "url(imgs/loserimg.jpg)")
      $('ul').hide()
      $('#gameBoard').remove();
    }
  }
}
