let myNumbers = [23,234,345,4356234,243,43,56,2];

// Your code here
const myFunction = (item) =>  {
    return item * 3;
}
let newArray = myNumbers.map(myFunction);

console.log(newArray);
