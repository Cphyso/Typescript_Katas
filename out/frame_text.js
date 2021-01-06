"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frame = void 0;
var longest_string_1 = require("./longest_string");
var frame = /** @class */ (function () {
    function frame() {
        this.framing = "";
        this.textOnLine = 0;
        this.y = 0;
    }
    frame.prototype.stringFrame = function (stringsArray) {
        var min_width = longest_string_1.LongestString(stringsArray);
        this.horizontalFraming(min_width);
        for (var k = 0; k < stringsArray.length; k++) {
            this.leftFraming(stringsArray);
            this.rightFraming(stringsArray, min_width);
        }
        this.horizontalFraming(min_width);
        console.log(this.framing);
    };
    frame.prototype.horizontalFraming = function (min_length) {
        for (var i = 0; i < min_length + 6; i++) {
            this.framing += "*";
        }
        this.framing += "\n";
    };
    frame.prototype.leftFraming = function (arr) {
        this.framing += "*";
        for (var m = 0; m < 1; m++) {
            this.framing += "  ";
        }
        if (this.textOnLine < arr.length) {
            this.framing += arr[this.textOnLine];
        }
        this.textOnLine++;
    };
    frame.prototype.rightFraming = function (stingArray, arr) {
        var spaces = arr - stingArray[this.y].length;
        for (var x = 0; x < spaces + 2; x++) {
            this.framing += " ";
        }
        this.y++;
        this.framing += "*\n";
    };
    return frame;
}());
exports.frame = frame;
