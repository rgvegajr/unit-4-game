// global variables
let targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);  //max=120, min=19
$("#gameNumber").text(targetNumber);
let rubyValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let diamondValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let topazValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let emeraldValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
//console.log("vars: " + rubyValue + ":" + diamondValue + ":" + topazValue + ":" + emeraldValue);
let wins = 0;
let losses = 0;
//let counter = 0;

// functions, objects, methods
$(function() {  // Handler for .ready() called.
let ccGame = {
    init: function () {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);  //max=120, min=19
        $("#gameNumber").text(targetNumber);
        var randomVals = []
        while (randomVals.length < 4) {
            var r = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            if (randomVals.indexOf(r) === -1) {   //uses indexOf functionality to only push r if not already in array
                randomVals.push(r);
            }
        };
        rubyValue = randomVals[0];
        diamondValue = randomVals[1];
        topazValue = randomVals[2];
        emeraldValue = randomVals[3];
        counter = 0;
        $("#gameNumber").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#counter").text(counter);
        console.log("init: " + rubyValue + ":" + diamondValue + ":" + topazValue + ":" + emeraldValue);
    }, 
    play: function() {
        $(".crystals").on("click", function () {
            let crystalValue = 0;
            if ($(this).attr("id") == "ruby") {
                //let crystalValue = ($(this).text());
                crystalValue = rubyValue;
                crystalValue = parseInt(crystalValue);
            } else if ($(this).attr("id") == "diamond") {
                crystalValue = diamondValue;
                crystalValue = parseInt(crystalValue);
            } else if ($(this).attr("id") == "topaz") {
                crystalValue = topazValue;
                crystalValue = parseInt(crystalValue);
            } else if ($(this).attr("id") == "emerald") {
                crystalValue = emeraldValue;
                crystalValue = parseInt(crystalValue);
            };
            console.log("you clicked" + $(this).attr("id") + ": value: " + crystalValue);
            counter += crystalValue;
            $("#counter").text(counter);    
            if (counter == targetNumber) {
                setTimeout(function () {
                    alert("You win!");
                    wins = wins + 1;
                    ccGame.init();
                }, 300);
            } else if (counter >= targetNumber) {
                setTimeout(function () {
                    alert("You lose!!");
                    losses = losses + 1;
                    ccGame.init();
                }, 300);
            };
            $("#wins").text(wins);
            $("#losses").text(losses);                        
        }); 
    } 
    }
//calls
ccGame.init();
ccGame.play();
});