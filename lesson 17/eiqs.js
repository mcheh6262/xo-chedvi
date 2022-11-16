const eiqseiguel = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,]
let player = "0"
let computer = "x"
let miqom = 0
let won_player = 'player won the game'
let won_computer = 'computer won the game'
let tiko = 'tiko'
game_ove = false

play()
function play() {
    for(let i in eiqseiguel) {
        eiqseiguel[miqom] = undefined
    }
    document.getElementById('won').innerHTML = ""
    for (let i = 0; i <=8; i++) {
        document.getElementById(`box${i}`).innerHTML = ""
    }
    for (let i = 0; i <=8; i++) {
        document.getElementById(`box${i}`).disabled = false
    }
    document.getElementById(`play`).disabled = false
}

function div0() {
    if (eiqseiguel[0] == undefined) {
        eiqseiguel[0] = player
        document.getElementById('box0').innerHTML = player
        tnaim(player)
        computer1()
    }
  
 
}
function div1() {
    if (eiqseiguel[1] == undefined) {
        eiqseiguel[1] = player
        document.getElementById('box1').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div2() {
    if (eiqseiguel[2] == undefined) {
        eiqseiguel[2] = player
        document.getElementById('box2').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div3() {
    if (eiqseiguel[3] == undefined) {
        eiqseiguel[3] = player
        document.getElementById('box3').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div4() {
    if (eiqseiguel[4] == undefined) {
        eiqseiguel[4] = player
        document.getElementById('box4').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div5() {
    if (eiqseiguel[5] == undefined) {
        eiqseiguel[5] = player
        document.getElementById('box5').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div6() {
    if (eiqseiguel[6] == undefined) {
        eiqseiguel[6] = player
        document.getElementById('box6').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div7() {
    if (eiqseiguel[7] == undefined) {
        eiqseiguel[7] = player
        document.getElementById('box7').innerHTML = player
        tnaim(player)
        computer1()
    }  
}
function div8() {
    if (eiqseiguel[8] == undefined) {
        eiqseiguel[8] = player
        document.getElementById('box8').innerHTML = player
        tnaim(player)
        computer1()
    }  
}

function tnaim(won) {
if (eiqseiguel[0] === eiqseiguel[1] && eiqseiguel[0] === eiqseiguel[2] === won ||
    eiqseiguel[3] === eiqseiguel[4] && eiqseiguel[3] === eiqseiguel[5] === won ||
    eiqseiguel[6] === eiqseiguel[7] && eiqseiguel[6] === eiqseiguel[8] === won ||
    eiqseiguel[0] === eiqseiguel[3] && eiqseiguel[0] === eiqseiguel[6] === won ||
    eiqseiguel[1] === eiqseiguel[4] && eiqseiguel[1] === eiqseiguel[7] === won ||
    eiqseiguel[2] === eiqseiguel[5] && eiqseiguel[2] === eiqseiguel[8] === won ||
    eiqseiguel[0] === eiqseiguel[4] && eiqseiguel[0] === eiqseiguel[8] === won ||
    eiqseiguel[2] === eiqseiguel[4] && eiqseiguel[2] === eiqseiguel[6] === won 
) {
    
    return true;

    }
    else {
        return false;  
    }
} 
    if (tnaim(player)) { 
        $(`#'won'`).text(won_player)
        !game_ove
        
    }
    else if (!tnaim(player) && !tnaim(computer)) { 
        $(`#won`).text(tiko)
        !game_ove
    } 
    else if (tnaim(computer)) {
        $(`#won`).text(won_computer)
        !game_ove
    }

game_over()
function game_over() {
    for (let i = 0; i <= 8; i++) {
document.getElementById(`$box{i}`).disable = true 
document.getElementById(`play`).disable = false
  }
}

function computer1() {
    if (eiqseiguel.every(e => e != undefined))
    return;
do {miqom = Math.floor (Math.random()*9)} 
while(eiqseiguel[miqom] !== undefined)
if(eiqseiguel[miqom] == undefined) {
    eiqseiguel[miqom] = computer
    document.getElementById(`box${miqom}`).innerHTML = computer
    tnaim(computer) 
  }

}

