"use strict";
let input1 = document.getElementById("player1");
let input2 = document.getElementById("player2");
let span = document.querySelectorAll("span");
let btn = document.querySelector(".btn");
let desc = document.querySelectorAll(".b");
let turn = document.querySelector("#turn");
let score = document.querySelectorAll("#score");
input1.addEventListener("input", onInput1);
input2.addEventListener("input", onInput2);
function onInput1(e) {
    onInput(e, 0);
}
function onInput2(e) {
    onInput(e, 1);
}
function onInput(e, num) {
    let temp = (e.target);
    span[num].textContent = temp.value;
}
btn.addEventListener("click", play);
function play(e) {
    e.preventDefault();
    let player = false;
    let count = 0;
    let score1 = 0;
    let score2 = 0;
    let playerX = "";
    let playerO = "";
    if (span[0].textContent != "")
        playerX += span[0].textContent;
    else
        playerX += "Player X";
    if (span[1].textContent != "")
        playerO += span[1].textContent;
    else
        playerO += "Player O";
    turn.textContent = playerX + " your turn";
    for (let i = 0; i < 9; i++) {
        btn.addEventListener("click", newPlay);
        desc[i].addEventListener("click", imageChange);
        function newPlay() {
            clearDesc();
            count = 0;
            player = false;
        }
        function imageChange() {
            if (desc[i].id != "x" && desc[i].id != "o" && !win()) {
                if (player == false) {
                    imageChangeX(i);
                    if (win()) {
                        turn.textContent = "Congrattulations " + playerX + " WIN!!!";
                        score1++;
                        score[0].textContent = score1.toString();
                        return;
                    }
                    turn.textContent = playerO + " your turn";
                }
                else {
                    imageChange0(i);
                    if (win()) {
                        turn.textContent = "Congrattulations " + playerO + " WIN!!!";
                        score2++;
                        score[1].textContent = score1.toString();
                        return;
                    }
                    turn.textContent = playerX + "your turn";
                }
                player = !player;
                count++;
                if (count == 9 && !win())
                    turn.textContent = "A draw, no winner!";
            }
        }
    }
}
function imageChangeX(num) {
    desc[num].children[1].textContent = "X";
    desc[num].id = "x";
}
function imageChange0(num) {
    desc[num].children[1].textContent = "O";
    desc[num].id = "o";
}
function win() {
    if (desc[0].id == desc[1].id && desc[0].id == desc[2].id)
        return true;
    if (desc[3].id == desc[4].id && desc[3].id == desc[5].id)
        return true;
    if (desc[6].id == desc[7].id && desc[6].id == desc[8].id)
        return true;
    if (desc[0].id == desc[3].id && desc[0].id == desc[6].id)
        return true;
    if (desc[1].id == desc[4].id && desc[1].id == desc[7].id)
        return true;
    if (desc[2].id == desc[5].id && desc[2].id == desc[8].id)
        return true;
    if (desc[0].id == desc[4].id && desc[0].id == desc[8].id)
        return true;
    if (desc[2].id == desc[4].id && desc[2].id == desc[6].id)
        return true;
}
function clearDesc() {
    for (let i = 0; i < 9; i++) {
        desc[i].id = i.toString();
        desc[i].children[1].textContent = "";
    }
}
