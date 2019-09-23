$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var computerGeneratedNumber = Math.floor(Math.random() * 120) + 19;

    var score = 0;

    var game = function () {
        var redNum = Math.floor(Math.random() * 12) + 1;
        var greenNum = Math.floor(Math.random() * 12) + 1;
        var blueNum = Math.floor(Math.random() * 12) + 1;
        var yellowNum = Math.floor(Math.random() * 12) + 1;
        computerGeneratedNumber = Math.floor(Math.random() * 120) + 19;
        score = 0;
    
        $("#bluePurple").on("click", function (redCrystal) {
            score += redNum;
            $("#targetScore").text("Your tally so far: " + score);
            check();
        });

        $("#greenCrystal").on("click", function () {
            score += greenNum;
            $("#targetScore").text("Your tally so far: " + score);
            check();
        });

        $("#purple").on("click", function () {
            score += blueNum;
            $("#targetScore").text("Your tally so far: " + score);
            check();
        });

        $("#seafoam").on("click", function () {
            score += yellowNum;
            $("#targetScore").text("Your tally so far: " + score);
            check();
        });

        $("#randomNumber").text("Random number: " + computerGeneratedNumber);
    };

    function check() {

        if (score === computerGeneratedNumber) {
            wins++
            game()
            $("#win").text("Wins: " + wins)
        }

        else if (score > computerGeneratedNumber) {
            losses++
            game()
            $("#loss").text("Losses: " + losses)
        }
    };

    game();
    check()
});