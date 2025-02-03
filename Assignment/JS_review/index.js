//first element is the max
let randomArray = [];
for (let i=0; i<20; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    randomArray.push(randomNumber);
}
console.log("Generated Array:", randomArray);


/*let max = randomArray[0];

//loop the array
for (let i=1; i<randomArray.length; i++) {
    if (randomArray[i] > max) {
        max = randomArray[i];
    }
}

console.log("Max number:", max); 
*/