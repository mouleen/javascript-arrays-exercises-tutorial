let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here

console.log(
    theBools.map((item)=>{
        return (item === 0)?'woko':'wiki';
    })
)