export{}

export function drawSquare(len: number){
    let square = "";
    for(let i = 0; i < len; i++){
        for(let k = 0; k < len; k++){
            square = square + "#";
        }
        square = square + "\n";
    }
    console.log(square);
}
