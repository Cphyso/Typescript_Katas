export{}

function LongestString(arrayOfStrings: string[]): number{
    let longestString : string = "";
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(longestString.length < arrayOfStrings[i].length){
            longestString = arrayOfStrings[i];
        }
    }
    return longestString.length;
}

function moreStrings(arrayStrings: string[],num: number){
    for(let text of arrayStrings){
        if(text.length === num){
            console.log(text);
        }
    }
}

let arr = ["asrdt","dfghijokpkortyt","jhjgfgjh","jkhgfdgh","wertyuijhvc","ijhvcghui","oijhgvcfgyu8","khgfdsawertyui"];

let x = LongestString(arr);
console.log(x);

moreStrings(arr,x);