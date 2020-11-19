"use strict";
exports.__esModule = true;
function LongestString(arrayOfStrings) {
    var longestString = "";
    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (longestString.length < arrayOfStrings[i].length) {
            longestString = arrayOfStrings[i];
        }
    }
    return longestString.length;
}
function moreStrings(arrayStrings, num) {
    for (var _i = 0, arrayStrings_1 = arrayStrings; _i < arrayStrings_1.length; _i++) {
        var text = arrayStrings_1[_i];
        if (text.length === num) {
            console.log(text);
        }
    }
}
var arr = ["asrdt", "dfghijokpkortyt", "jhjgfgjh", "jkhgfdgh", "wertyuijhvc", "ijhvcghui", "oijhgvcfgyu8", "khgfdsawertyui"];
var x = LongestString(arr);
console.log(x);
moreStrings(arr, x);
