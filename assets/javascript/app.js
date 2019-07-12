$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var computerGeneratedNumber = Math.floor(Math.random() * 120) + 19;

    var score = 0;

    var game = function () {
        var redNum = Math.floor(Math.random() * 12) + 1
        var greenNum = Math.floor(Math.random() * 12) + 1
        var blueNum = Math.floor(Math.random() * 12) + 1
        var yellowNum = Math.floor(Math.random() * 12) + 1
        computerGeneratedNumber = Math.floor(Math.random() * 120) + 19
        score = 0
        // change score display
        // change cpugenerated display

        $("#redCrystal").on("click", function (redCrystal) {
            score += redNum;
            $("#targetScore").text(score);
            check()
            // return score;

        });

        $("#greenCrystal").on("click", function () {
            score += greenNum;
            $("#targetScore").text(score);
            check()
            // return score;


        });

        $("#blueCrystal").on("click", function () {

            score += blueNum;
            $("#targetScore").text(score);
            check()
            // return score;

        });

        $("#yellowCrystal").on("click", function () {

            score += yellowNum;
            $("#targetScore").text(score);
            check()
            // return score;

        });

        $("#randomNumber").text(computerGeneratedNumber);

        console.log(score)
        console.log(computerGeneratedNumber)
        // check()

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
    }

    game();
    check()
});