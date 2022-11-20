const eiqseiguel = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];
let player = "0";
let computer = "x";
let miqom = 0;
let won_player = "player won the game";
let won_computer = "computer won the game";
let tiko = "tiko";
game_ove = false;


function play() {
  for (let miqom in eiqseiguel) {
    eiqseiguel[miqom] = undefined;
  }
  document.getElementById("won").innerHTML = "";
  for (let i = 0; i <= 8; i++) {
    document.getElementById(`box${i}`).innerHTML = "";
  }
  for (let i = 0; i <= 8; i++) {
    document.getElementById(`box${i}`).disabled = false;
  }
  document.getElementById(`play`).disabled = false;
}

function check_win_computer_play() {
    if (!tnaim(player)) {
      computer1();
      if (tnaim(computer)) {
        $(`#won`).text(won_computer);
        game_over()
      }
    } else {
      $(`#won`).text(won_player);
      game_over()
    }
  }

  function div_xy(number) {
    if (eiqseiguel[number] == undefined) {
      eiqseiguel[number] = player;
      document.getElementById(`box${number}`).innerHTML = player;
      check_win_computer_play()}
    
  }
  
function tnaim(won) {
  if (
    (eiqseiguel[0] === eiqseiguel[1] &&
      eiqseiguel[0] === eiqseiguel[2] &&
      eiqseiguel[0] === won) ||
    (eiqseiguel[3] === eiqseiguel[4] &&
      eiqseiguel[3] === eiqseiguel[5] &&
      eiqseiguel[3] === won) ||
    (eiqseiguel[6] === eiqseiguel[7] &&
      eiqseiguel[6] === eiqseiguel[8] &&
      eiqseiguel[6] === won) ||
    (eiqseiguel[0] === eiqseiguel[3] &&
      eiqseiguel[0] === eiqseiguel[6] &&
      eiqseiguel[0] === won) ||
    (eiqseiguel[1] === eiqseiguel[4] &&
      eiqseiguel[1] === eiqseiguel[7] &&
      eiqseiguel[1] === won) ||
    (eiqseiguel[2] === eiqseiguel[5] &&
      eiqseiguel[2] === eiqseiguel[8] &&
      eiqseiguel[2] === won) ||
    (eiqseiguel[0] === eiqseiguel[4] &&
      eiqseiguel[0] === eiqseiguel[8] &&
      eiqseiguel[0] === won) ||
    (eiqseiguel[2] === eiqseiguel[4] &&
      eiqseiguel[2] === eiqseiguel[6] &&
      eiqseiguel[2] === won)
  ) {
    return true;
  }
  return false;

}

function game_over() {
  for (let i = 0; i <= 8; i++) {
    document.getElementById(`box${i}`).disabled = true;
    document.getElementById(`play`).disabled = false;
  }
}

function computer1() {
  if (eiqseiguel.every((e) => e != undefined)) return;
  do {
    miqom = Math.floor(Math.random() * 9);
  } while (eiqseiguel[miqom] !== undefined);
  if (eiqseiguel[miqom] == undefined) {
    eiqseiguel[miqom] = computer;
    document.getElementById(`box${miqom}`).innerHTML = computer;
    tnaim(computer);
  }
}

