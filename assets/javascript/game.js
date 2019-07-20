var wins = 0;
var losses = 0;
var ourscore = 0;
var targetscore = 0;
var redgem = 0;
var bluegem = 0;
var yellowgem = 0;
var greengem = 0;


function createRandomScore(){
    var randomNumber = Math.random() * 120;
    var rounded = Math.ceil(randomNumber);
    return rounded
}



function createCrystalScore(){
    var randomNumber = Math.random() * 12;
    var rounded = Math.ceil(randomNumber);
    return rounded
}



function startGame(){
    targetscore = createRandomScore();
    redgem = createCrystalScore();
    bluegem = createCrystalScore();
    yellowgem = createCrystalScore();
    greengem = createCrystalScore();
    console.log("The target score is: " + targetscore);
    console.log("The crystal score are " + redgem, bluegem, yellowgem, greengem);
    updateScores();
}

startGame();

function updateScores(){
    console.log("test")
    $("#targetscore").text("The target score is: " + targetscore);
    $("#ourscore").text("Our score is: " + ourscore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

}

$("#red").on("click", function(){
    console.log("The Redgem was clicked");
    ourscore = ourscore + redgem;
    updateScores();
})

$("#blue").on("click", function(){
    console.log("The Bluegem was clicked");
    ourscore = ourscore + bluegem;
    updateScores();
})

$("#yellow").on("click", function(){
    console.log("The Yellowgem was clicked");
    ourscore = ourscore + yellowgem;
    updateScores();
})

$("#green").on("click", function(){
    console.log("The Greengem was clicked");
    ourscore = ourscore + greengem;
    updateScores();
})


