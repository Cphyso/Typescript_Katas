export{}

export function LongestString(arrayOfStrings: string[]): number{
    let longestString : string = "";
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(longestString.length < arrayOfStrings[i].length){
            longestString = arrayOfStrings[i];
        }
    }
    return longestString.length;
}

export function moreStrings(arrayStrings: string[],num: number){
    for(let text of arrayStrings){
        if(text.length === num){
            console.log(text);
        }
    }
}
