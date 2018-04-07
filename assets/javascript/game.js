var loss = 0;
$("#LOSSES").text(loss);
var win = 0; 
$("#WINS").text(win);
var total = 0
$(document).ready(function() {
    $("#startGame").on("click", function newGame() {
        total = 0;

        $(".SCORE").text(total);
        var randomNumber = (Math.floor(Math.random()* 20) + 75);
        $(".randomBox").text(randomNumber);
        
        //Gem values
        var redNumber = (Math.floor((Math.random() * 10) + 1));
        var blueNumber = (Math.floor((Math.random() * 10) + 1));
        var yellowNumber = (Math.floor((Math.random() * 10) + 1));
        var greenNumber = (Math.floor((Math.random() * 10) + 1));
    
        //Click crystal generate random number
        // $(".crystal").on("click", function() {
        // });

        $(".RED").on("click", function() {
            console.log(redNumber);
            total = total + redNumber;
            $(".SCORE").text(total);
                if(total === randomNumber) {
                    winCon()
                }
                if(total > randomNumber) {
                    lossCon()
                }
        });
        $(".BLUE").on("click", function() {
            console.log(blueNumber);
            total = total + blueNumber;
            $(".SCORE").text(total);
                if(total === randomNumber) {
                    winCon()
                }
                if(total > randomNumber) {
                    lossCon()
                }
        });
        $(".YELLOW").on("click", function() {
            console.log(yellowNumber);
            total = total + yellowNumber;
            $(".SCORE").text(total);
                if(total === randomNumber) {
                    winCon()
                }
                if(total > randomNumber) {
                    lossCon()
                }
        });
        $(".GREEN").on("click", function() {
            console.log(greenNumber);
            total = total + greenNumber;
            $(".SCORE").text(total);
                if(total === randomNumber) {
                    winCon()
                }
                if(total > randomNumber) {
                    lossCon()
                }
        });
        
        function winCon() {
            win++;
            $("#WINS").text(win);
            newGame();
            return redNumber = 0;
            return blueNumber = 0; 
            return yellowNumber = 0;
            return greenNumber = 0;
        }

        function lossCon() {
            loss++;
            $("#LOSSES").text(loss);
            newGame();
            return redNumber = 0;
            return blueNumber = 0; 
            return yellowNumber = 0;
            return greenNumber = 0;
        } 
    })
});