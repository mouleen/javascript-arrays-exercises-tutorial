// Your code here
const matrixBuilder=(size)=>{
    var arr=[];
    for (var y=0; y<size ; y++){
        arr[y]=[];
        for (var x=0; x<size ; x++){
            arr[y][x]=Math.floor(Math.random() * 2);
        }
    }
    return arr;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))