"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _hello = __importStar(require("./hello"));
var _even = __importStar(require("./even_or_odd"));
var _combine = __importStar(require("./combine_arrays"));
var _squ = __importStar(require("./square"));
var _tri = __importStar(require("./triangle"));
var _isos = __importStar(require("./isosceles_tri"));
var _long = __importStar(require("./longest_string"));
var _frame = __importStar(require("./frame_text"));
_hello.hello("Sfiso Mhlongo");
//declare 2 array for combining with combine_array function
var array1 = [2, 2, 2, 2, 2];
var array2 = [4, 4, 4, 4, 4];
_combine.combineArrays(array1, array2);
//function checking whether a digit is even or odd
_even.evenOrOddChecker(9);
//draw a square given a number. Square length should equal given number
_squ.drawSquare(7);
//draw a triangle given a number. triangle side should equal given number
_tri.drawTriangle(10);
//draw a isosceles triangle given a number. Triangle side length should equal given number
_isos.drawIsoscelesTriangle(5);
//Get the longest string from a array of strings
var arr = ["asrdt", "dfghijokpkortyt", "jhjgfgjh", "jkhgfdgh", "wertyuijhvc", "ijhvcghui", "oijhgvcfgyu8", "khgfdsawertyui"];
_long.moreStrings(arr, _long.LongestString(arr));
//Frame an array of string with *s
var testFrame = new _frame.frame;
testFrame.stringFrame(arr);
