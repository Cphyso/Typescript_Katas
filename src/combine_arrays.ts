export{}

export function combineArrays(arr1: any[],arr2:any[]){
    let newArray :any[] = [];
    for(let i = 0; i < arr1.length; i++){
            newArray.push(arr1[i]);
            newArray.push(arr2[i]);
    }
    console.log(newArray);
}
