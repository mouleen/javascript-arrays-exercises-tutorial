let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    // MAGIC HAPPENS HERE
    if(typeof(myArray[i])=='object'){
        //console.log('es objeto');
        hello.push(myArray[i]);
    }
}

console.log(hello)
