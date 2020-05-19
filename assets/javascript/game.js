//crystals
var crystal = {
    green:
    {
        name: "green",
        value: 0
    },

    orange:
    {
        name: "orange",
        value: 0
    },
    blue:
    {
        name: "blue",
        value: 0
    },
    purple:
    {
        name: "purple",
        value: 0
    }
};

//var
var currentScore = 0;
var targetScore = 0;

var lose = 0;
var win = 0;

//random number function
var getRandom = function (min, max) {
    return Math.floor((Math.random() * max - min + 1) + min);
};

//start game
var run = function () {
    //reset score to 0
    currentScore = 0;
    //make ran target score
    targetNumber = getRandom(19, 120);
    console.log(targetNumber);
    $(".targetScore").html(targetNumber);
    $(".userScore").html(currentScore);
};

//random number for each crystal
crystal.green.value = getRandom(1, 12);
crystal.orange.value = getRandom(1, 12);
crystal.blue.value = getRandom(1, 12);
crystal.purple.value = getRandom(1, 12);



//function to add the value of the crystals to the current score
var crystalValue = function (crystal) {
    currentScore = currentScore + crystal.value;
    $("#userScore").html(currentScore);

    checkWins();
}

//check if score is = to target number, else lose
var checkWins = function () {
    // var lose = 0;
    if (currentScore > targetNumber) {
        alert("You went over the target score :(");
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        //restart game
        run();
    }
    else if (currentScore === targetNumber) {
        // var win = 0;
        alert("you won");
        console.log("you won");
        win++;
        $("#win").html(win);
        //restart game
        run();
    }
};

//start game
run();

//on-click for the crystal images
$("#green").on("click", function () {
    crystalValue(crystal.green);
});

$("#blue").on("click", function () {
    crystalValue(crystal.blue);
});

$("#orange").on("click", function () {
    crystalValue(crystal.orange);
});

$("#purple").on("click", function () {
    crystalValue(crystal.purple);
});