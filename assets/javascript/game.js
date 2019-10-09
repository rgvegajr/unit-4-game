// global variables
let targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);  //max=120, min=19
$("#gameNumber").text(targetNumber);
let rubyValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let diamondValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let topazValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
let emeraldValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);//max=12, min=1
console.log("vars: " + rubyValue + ":" + diamondValue + ":" + topazValue + ":" + emeraldValue);
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
        console.log("init: " + rubyValue + ":" + diamondValue + ":" + topazValue + ":" + emeraldValue);

    }, 
    play: function() {
        $(".crystals").on("click", function() {
            if ($(this).attr("id") == "#ruby") {
                let crystalValue = ($(this).text());
                crystalValue = parseInt(crystalValue);   
            } else if  ($(this).attr("id") == "#diamond") {        
                let crystalValue = ($(this).text());
                crystalValue = parseInt(crystalValue);
            } else if  ($(this).attr("id") == "topaz") {
                 let crystalValue = ($(this).text());
                crystalValue = parseInt(crystalValue);
            } else if ($(this).attr("id") == "emerald") {        
                let crystalValue = ($(this).text());
                crystalValue = parseInt(crystalValue);
            }
            console.log("you clicked" + $(this).attr("id") + ": value: " + crystalValue);
            counter += crystalValue;
    // if (counter < targetNumber) {
    //     $("#ruby").on("click", function () {
    //         // let crystalValue = ($(this).attr("data-crystalvalue"));
    //         // crystalValue = parseInt(crystalValue);
    //         rubyValue = parseInt(rubyValue);
    //         counter += rubyValue;
    //         $("#counter").text(counter);
    //         console.log("ruby! counter = " + counter);
    //         });
    //     $("#diamond").on("click", function () {
    //         // let crystalValue = ($(this).attr("data-crystalvalue"));
    //         // crystalValue = parseInt(crystalValue);
    //         diamondValue = parseInt(diamondValue);
    //         counter += diamondValue;
    //         $("#counter").text(counter);
    //         console.log("diamond! counter = " + counter);
    //         });
    //     $("#topaz").on("click", function () {
    //         // let crystalValue = ($(this).attr("data-crystalvalue"));
    //         // crystalValue = parseInt(crystalValue);
    //         topazValue = parseInt(topazValue);
    //         counter += topazValue;
    //         $("#counter").text(counter);
    //         console.log("topaz! counter = " + counter);
    //         });
    //     $("#emerald").on("click", function () {
    //         // let crystalValue = ($(this).attr("data-crystalvalue"));
    //         // crystalValue = parseInt(crystalValue);
    //         emeraldValue = parseInt(emeraldValue);
    //         counter += emeraldValue;
    //         $("#counter").text(counter);
    //         console.log("emerald! counter = " + counter);
    //         });
    //         console.log("running score = " + counter);
    //         console.log("counter = " + counter + ": targetnumber = " +targetNumber);
        // } else if (counter == targetNumber) {
            if (counter == targetNumber) {
                alert("You win!");
                wins = wins + 1;
                
            } else if (counter >= targetNumber) {
                alert("You lose!!");
                losses = losses +1;            
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