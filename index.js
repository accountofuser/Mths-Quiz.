player1 = localStorage.getItem("player_1name");
player2 = localStorage.getItem("player_2name");

score1 = 0;

score2 = 0;

q_t = "player1";
ans_t = "player2";
document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("player2").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("question").innerHTML = "question turn : " + player1;
document.getElementById("answer").innerHTML = "answer turn : " + player2;

function send() {
    no1 = document.getElementById("1stn").value;
    no2 = document.getElementById("2ndn").value;
    ans = no1 * no2;

    console.log(ans);

    question = "<h4 id='word_display'>question: " + no1 + "x" + no2 + "</h4>";
    ans_input = "<br>ans: <input type='number' id='input_ans'>";
    checkbtn = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
    div = question + ans_input + checkbtn;
    document.getElementById("output").innerHTML = div;
    document.getElementById("word").value = '';
    document.getElementById("1stn").value = '';
    document.getElementById('2ndn').value = '';
}

function check() {
    ans2 = document.getElementById("input_ans").value;


    if (ans2 == ans) {
        if (ans_t == "player1") {
            score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = score1;
        } else {
            score2 = score2 + 1;
            document.getElementById("player2_score").innerHTML = score2;
        }
    }
    if (q_t == "player1") {
        q_t = "player2"
        document.getElementById("question").innerHTML = "Question Turn - " + player2;
    } else {
        q_t = "player1"
        document.getElementById("question").innerHTML = "Question Turn - " + player1;
    }

    if (ans_t == player1) {
        ans_t = player2
        document.getElementById("answer").innerHTML = "Answer Turn - " + player2;
    } else {
        ans_t = player1
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1;
    }

    document.getElementById("output").innerHTML = '';
    document.getElementById('1stn').value = '';
    document.getElementById('2ndn').value = '';
}