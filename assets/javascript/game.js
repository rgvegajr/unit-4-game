// global variables
let targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);  //max=120, min=19
$("#gameNumber").text(targetNumber);
let rubyValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let diamondValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let topazValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let emeraldValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
console.log(rubyValue + ":" + diamondValue + ":" + topazValue + ":" + emeraldValue);
let wins = 0;
let losses = 0;
let counter = 0;

// functions, objects, methods
$(function() {  // Handler for .ready() called.
let ccGame = {
    init: function() {
        $("#gameNumber").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#counter").text(counter);
    }, 
    play: function() {
        $("#ruby").on("click", function () {
            // let crystalValue = ($(this).attr("data-crystalvalue"));
            // crystalValue = parseInt(crystalValue);
            rubyValue = parseInt(rubyValue);
            counter += rubyValue;
            });
        $("#diamond").on("click", function () {
            // let crystalValue = ($(this).attr("data-crystalvalue"));
            // crystalValue = parseInt(crystalValue);
            diamondValue = parseInt(diamondValue);
            counter += diamondValue;
            });
        $("#topaz").on("click", function () {
            // let crystalValue = ($(this).attr("data-crystalvalue"));
            // crystalValue = parseInt(crystalValue);
            topazValue = parseInt(topazValue);
            counter += topazValue;
            });
        $("#emerald").on("click", function () {
            // let crystalValue = ($(this).attr("data-crystalvalue"));
            // crystalValue = parseInt(crystalValue);
            emeraldValue = parseInt(emeraldValue);
            counter += emeraldValue;
            });
            alert("New score: " + counter);
            $("#counter").text(counter);
            if (counter === targetNumber) {
                alert("You win!");
            } else if (counter >= targetNumber) {
                alert("You lose!!");
            };                        
        }  

    }
//calls
ccGame.init();
ccGame.play();
});