function check() {
    var questionOne = document.Quiz.questionOne.value;
    var right = 0;


    if (questionOne == "correct") {
        right = right + 20;
    };
    document.getElementById("Results").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "%";

};
