let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
const mergeTwoList = (arr)=>{
    /* Se comenta la solucion porque solicita utilizar el for 
    even=arr.filter((item) => item % 2 === 0 );
    odd=arr.filter((item) => item % 2 != 0 );
    */
    let odd=[],even=[];
    for (idx in arr){
        ( arr[idx] % 2 === 0 ) ?  even.push(arr[idx]) : odd.push(arr[idx]) ;
    }
    return odd.concat(even);
}


console.log(mergeTwoList(listOfNumbers));