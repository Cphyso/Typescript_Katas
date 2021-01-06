"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moreStrings = exports.LongestString = void 0;
function LongestString(arrayOfStrings) {
    var longestString = "";
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (longestString.length < arrayOfStrings[i].length) {
            longestString = arrayOfStrings[i];
        }
    }
    return longestString.length;
}
exports.LongestString = LongestString;
function moreStrings(arrayStrings, num) {
    for (var _i = 0, arrayStrings_1 = arrayStrings; _i < arrayStrings_1.length; _i++) {
        var text = arrayStrings_1[_i];
        if (text.length === num) {
            console.log(text);
        }
    }
}
exports.moreStrings = moreStrings;
