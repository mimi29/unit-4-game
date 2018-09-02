var random;
var totalScore = 0;
var targetScore = 0;
var totalLosses = 0;
var totalWins = 0;

function getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * max)+min;
    console.log(random);
    return random;
}

function initialize() {
    totalScore = 0;
    targetScore = getRandomNumber(19, 120);
    $("#target-score").text(targetScore);
    $("#total-score").text(totalScore);
    $("#crystal1").attr("worth", getRandomNumber(1, 12));
    $("#crystal2").attr("worth",getRandomNumber(1, 12));
    $("#crystal3").attr("worth",getRandomNumber(1, 12));
    $("#crystal4").attr("worth",getRandomNumber(1, 12));
}

function updateScore(elemId, score) {
    $(elemId).text(score);
}

$(document).ready(function () {
    initialize();
    $("button").on("click", function () {
        console.log($('#'+this.id).attr("worth"))
        var score = parseInt($('#'+this.id).attr("worth"));
        totalScore += score;
        updateScore("#total-score", totalScore);
        if (totalScore > targetScore) {
            console.log("you lost, target score: "+targetScore+", your score: "+totalScore);
            totalLosses++;
            updateScore("#total-losses", totalLosses);
            initialize();
        } 
        else if (totalScore == targetScore) {
            totalWins++;
            updateScore("#total-wins", totalWins);
            initialize();
        }
    });

});