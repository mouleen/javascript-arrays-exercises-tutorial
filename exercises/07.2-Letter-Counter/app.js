let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (const pos in par) {
    //console.log(counts.hasOwnProperty(par[word]));
    let char=par[pos].toLowerCase();
    if(!char.trim() == ''){
        if(!counts.hasOwnProperty(char)){
         //   console.log('creo el elemento en 0 para: ' + char);
            counts[char] = 0;
        }
        counts[char] = counts[char] + 1;
       // console.log('sumo 1 para: '+ char +' valor actual = ' + counts[char]);
    }
} 
console.log(counts);
