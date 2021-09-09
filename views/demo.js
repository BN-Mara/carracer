/**
 * Just demo of speedo by changing values 
 */

var speed = 0;
let tacho = 0;
let gas = 0;
let mileage = 0;
var cter = 0; 

let turnSignalsStates = {
    'left':  true,
    'right': true
}

let iconsStates = {
    // main circle
    'dippedBeam': 1,
    'brake':      1,
    'drift':      1,
    'highBeam':   1,
    'lock':       1,
    'seatBelt':   1,
    'engineTemp': 2,
    'stab':       1,
    'abs':        1,
    // right circle
    'gas':        2,
    'trunk':      1,
    'bonnet':     1,
    'doors':      1,
    // left circle
    'battery':    2,
    'oil':        2,
    'engineFail': 2
}

function redraw() {
    draw(speed, tacho, gas, mileage, turnSignalsStates, iconsStates);
}

setInterval(myTymer,1);

function myTymer(){
    speed += 0.005;
    
    cter += 1;  
    if(speed < 0.41)
    {
        redraw(); 
        //console.log(speed);
    }  

}
redraw();