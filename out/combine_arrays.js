"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineArrays = void 0;
function combineArrays(arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
        newArray.push(arr1[i]);
        newArray.push(arr2[i]);
    }
    console.log(newArray);
}
exports.combineArrays = combineArrays;
