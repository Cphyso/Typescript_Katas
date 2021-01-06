export{}

export function drawIsoscelesTriangle(len: number){
    let triangle: string = "";
        for(let k = 0; k < len; k++){
            for(let s = 0; s < len - k; s++){
                triangle+=" ";
            }
            for(let i = 1; i <= k*2+1; i++){
                triangle += "#";
            } 
            triangle += "\n";         
        }
        console.log(triangle);
    }

