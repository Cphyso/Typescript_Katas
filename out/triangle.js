"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawTriangle = void 0;
function drawTriangle(num) {
    var triangle = "";
    for (var i = 0; i < num; i++) {
        for (var k = 0; k < i + 1; k++) {
            triangle = triangle + "#";
        }
        triangle = triangle + "\n";
    }
    console.log(triangle);
}
exports.drawTriangle = drawTriangle;
