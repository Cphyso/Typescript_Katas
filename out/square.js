"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawSquare = void 0;
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
exports.drawSquare = drawSquare;
