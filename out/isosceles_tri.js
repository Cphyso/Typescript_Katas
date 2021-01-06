"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawIsoscelesTriangle = void 0;
function drawIsoscelesTriangle(len) {
    var triangle = "";
    for (var k = 0; k < len; k++) {
        for (var s = 0; s < len - k; s++) {
            triangle += " ";
        }
        for (var i = 1; i <= k * 2 + 1; i++) {
            triangle += "#";
        }
        triangle += "\n";
    }
    console.log(triangle);
}
exports.drawIsoscelesTriangle = drawIsoscelesTriangle;
