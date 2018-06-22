var loss = 0;
$("#LOSSES").text(loss);
var win = 0; 
$("#WINS").text(win);
var total = 0

var redNumber = 0;
var blueNumber = 0; 
var yellowNumber = 0;
var greenNumber = 0;

var randomNumber = (Math.floor(Math.random()* 20) + 75);
$(".randomBox").text(randomNumber);
console.log("R1" + randomNumber)


$(document).ready(function() {
    $("#startGame").on("click", function Game() {
        newGame();
    });

    function newGame() {
        total = 0;

        $(".SCORE").text(total);
        randomNumber = (Math.floor(Math.random()* 20) + 75);
        $(".randomBox").text(randomNumber);
        console.log("R2" + randomNumber)
        
        //Gem values
        redNumber = (Math.floor((Math.random() * 10) + 1));
        blueNumber = (Math.floor((Math.random() * 10) + 1));
        yellowNumber = (Math.floor((Math.random() * 10) + 1));
        greenNumber = (Math.floor((Math.random() * 10) + 1));
    }

    function winCon() {
        win++;
        $("#WINS").text(win);
        newGame();
        alert("You win!");
    }

    function lossCon() {
        loss++;
        $("#LOSSES").text(loss);
        newGame();
        alert("You lose!")
    } 

    $(".RED").on("click", function() {
        console.log("redNumber: ", redNumber);
        total = total + redNumber;
        $(".SCORE").text(total);
            if(total === randomNumber) {
                winCon();
            }
            if(total > randomNumber) {
                lossCon();
            }
    });
    $(".BLUE").on("click", function() {
        console.log("blueNumber: " + blueNumber);
        total = total + blueNumber;
        $(".SCORE").text(total);
            if(total === randomNumber) {
                winCon();
            }
            if(total > randomNumber) {
                lossCon();
            }
    });
    $(".YELLOW").on("click", function() {
        console.log("yellowNumber: " + yellowNumber);
        total = total + yellowNumber;
        $(".SCORE").text(total);
            if(total === randomNumber) {
                winCon();
            }
            if(total > randomNumber) {
                lossCon();
            }
    });
    $(".GREEN").on("click", function() {
        console.log("greenNumber: " + greenNumber);
        total = total + greenNumber;
        $(".SCORE").text(total);
            if(total === randomNumber) {
                winCon();
            }
            if(total > randomNumber) {
                lossCon();
            }
    });

});