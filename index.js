// var five = require('johnny-five'); //require/import the johnny-five module
import five from 'johnny-five';
var board = new five.Board(); //the Board class from johnny-five module

//When the board is ready create a led object on pin 13 and blink it 
//every 500 milliseconds.
board.on('ready',function() {
    var led = new five.Led(13);
    led.blink(500);
}); 