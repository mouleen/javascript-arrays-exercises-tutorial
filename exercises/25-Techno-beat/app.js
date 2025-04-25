// Your code here
const lyricsGenerator = (arr)=>{
    var ret='',counterDTB=0;
    
    arr.forEach(element => {
        ret+=(element == 0)?'Boom ':'Drop the bass ';
        counterDTB=( element === 1 ) ? counterDTB+1 : 0;
        if (element !=0 && counterDTB % 3 == 0) ret+='!!!Break the bass!!! ';
    });
    return ret;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
