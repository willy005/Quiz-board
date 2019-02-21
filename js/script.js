function check() {
    var questionOne = document.Quiz.questionOne.value;
    var right = 5;


    if (questionOne == "correct") {
        right = right + 15;
    };
    document.getElementById("Results").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "%";

};
