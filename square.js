"use strict";
exports.__esModule = true;
function drawSquare(len) {
    var square = "";
    for (var i = 0; i < len; i++) {
        for (var k = 0; k < len; k++) {
            square = square + "#";
        }
        square = square + "\n";
    }
    console.log(square);
}
drawSquare(2);
drawSquare(10);
drawSquare(15);
