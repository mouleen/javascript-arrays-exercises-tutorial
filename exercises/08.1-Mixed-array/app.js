let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let elementTypes=[];
mix.forEach((element)=>{
    //console.log(typeof(element));
    elementTypes.push(typeof(element));
})
console.log(elementTypes);