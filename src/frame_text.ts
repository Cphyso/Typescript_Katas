import {LongestString} from './longest_string';

export class frame{
    private framing: string = "";
    private textOnLine: number = 0;
    private y: number = 0;

    stringFrame(stringsArray: string[]){
        let min_width: number = LongestString(stringsArray);
        this.horizontalFraming(min_width);
        for(let k = 0; k < stringsArray.length; k++){
            this.leftFraming(stringsArray);
            this.rightFraming(stringsArray,min_width);
        }
        this.horizontalFraming(min_width);
        console.log(this.framing);
    }
    horizontalFraming(min_length: number){
        for(let i = 0; i < min_length + 6; i++){
            this.framing+="*";
        }
        this.framing+="\n";
    }
    leftFraming(arr:string[]){
        this.framing+="*";
        for(let m = 0; m < 1; m++){
           this.framing+= "  ";
        }
        if(this.textOnLine < arr.length){
            this.framing+=arr[this.textOnLine];
        }
        this.textOnLine++;
    }
    rightFraming(stingArray:string[],arr:number){
        let spaces: number =  arr - stingArray[this.y].length;
        for(let x = 0; x < spaces + 2; x++){
            this.framing+=" ";
        }
        this.y++;
        this.framing+="*\n";
    }  
}
