let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
const findMax = (arr) => {
    let aux=arr[0];
    return Math.max(...arr) ;
}
console.log(findMax(myArray));