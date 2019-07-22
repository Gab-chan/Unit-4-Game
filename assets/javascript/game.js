var wins = 0;
var losses = 0;
var ourscore = 0;
var targetscore = 0;
var redgem = 0;
var bluegem = 0;
var yellowgem = 0;
var greengem = 0;


//This function sets the random value of the targetscore.
function createRandomScore(){
    var randomNumber = Math.random() * 120;
    var rounded = Math.ceil(randomNumber);
    return rounded
}


//This function sets the random value of the 4 crystals.
function createCrystalScore(){
    var randomNumber = Math.random() * 12;
    var rounded = Math.ceil(randomNumber);
    return rounded
}


//This function is the actual begginning of the game. It contains and runs the variables with the updated and require value. So its basically the sequel of the two past functions.
function startGame(){
    targetscore = createRandomScore();
    redgem = createCrystalScore();
    bluegem = createCrystalScore();
    yellowgem = createCrystalScore();
    greengem = createCrystalScore();
    //console.log("The target score is: " + targetscore);
    //console.log("The crystal score are " + redgem, bluegem, yellowgem, greengem);
    updateScores();
    
}

startGame();


//This function is the one that takes the value of the variables and turns them into html for the user to see.
function updateScores(){
    
    $("#targetscore").text("The target score is: " + targetscore);
    $("#ourscore").text("Our score is: " + ourscore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    //console.log(ourscore);
    actualScores();
}


//This function sets the conditions for winning and lossing the game. They also set the conditions to reset the scores in case of winning or lossing.
function actualScores(){
    if (ourscore === targetscore){
        wins = wins + 1;
        
    }

    if (ourscore > targetscore){
        losses = losses + 1;
        
    }

    if (ourscore === targetscore || ourscore > targetscore){
        ourscore = ourscore - ourscore;
        targetscore = createRandomScore();
        redgem = createCrystalScore();
        bluegem = createCrystalScore();
        yellowgem = createCrystalScore();
        greengem = createCrystalScore();
        
    }

    console.log(redgem, bluegem, yellowgem, greengem);

}


// This functions create an event, when the #ids are click the user score changes (ourscore).

$("#red").on("click", function(){
    //console.log("The Redgem was clicked");
    ourscore = ourscore + redgem;
    updateScores();
})

$("#blue").on("click", function(){
    //console.log("The Bluegem was clicked");
    ourscore = ourscore + bluegem;
    updateScores();
})

$("#yellow").on("click", function(){
    //console.log("The Yellowgem was clicked");
    ourscore = ourscore + yellowgem;
    updateScores();
})

$("#green").on("click", function(){
    //console.log("The Greengem was clicked");
    ourscore = ourscore + greengem;
    updateScores();
})




