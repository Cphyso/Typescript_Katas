export{}

function drawTriangle(num: number){
    let triangle = "";
    for(let i = 0; i < num; i++){
        for(let k = 0; k < i + 1; k++){
                triangle = triangle + "#";
        }
        triangle = triangle + "\n";
    }
    console.log(triangle);
}
drawTriangle(7);