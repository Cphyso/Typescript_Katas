import * as _hello from './hello'
import * as _even from './even_or_odd'
import * as _combine from './combine_arrays'
import * as _squ from './square'
import * as _tri from './triangle'
import * as _isos from './isosceles_tri'
import * as _long from './longest_string'
import * as _frame from './frame_text'

_hello.hello("Sfiso Mhlongo");
//declare 2 array for combining with combine_array function
let array1: number[] = [2,2,2,2,2];
let array2: number[] = [4,4,4,4,4];
_combine.combineArrays(array1,array2);
//function checking whether a digit is even or odd
_even.evenOrOddChecker(9);
//draw a square given a number. Square length should equal given number
_squ.drawSquare(7);
//draw a triangle given a number. triangle side should equal given number
_tri.drawTriangle(10);
//draw a isosceles triangle given a number. Triangle side length should equal given number
_isos.drawIsoscelesTriangle(5);
//Get the longest string from a array of strings
let arr = ["asrdt","dfghijokpkortyt","jhjgfgjh","jkhgfdgh","wertyuijhvc","ijhvcghui","oijhgvcfgyu8","khgfdsawertyui"];
_long.moreStrings(arr,_long.LongestString(arr));
//Frame an array of string with *s
let testFrame = new _frame.frame;
testFrame.stringFrame(arr);
    
