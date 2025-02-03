//Task 1: Generate random array

let randomArr = [];
for (let i=0; i<20; i++) {
    //generate a random number
    let num = Math.floor(Math.random() * 101); 
   //Add random number to array
    randomArr.push(num); 
}
console.log("Generated Array:", randomArr);


// task 2: find maximum element
    //let first number be the maximum
let max = randomArr[0];

for (let i=1; i<randomArr.length; i++) {
    //if number is bigger, update the max
    if (randomArr[i] > max) {
        max = randomArr[i];
    }
}
console.log("Max element:", max);

// task 3: Find position of minimum element
    //first element is the minimum
let min = randomArr[0];
let minPosition = 0;

for (let i=1; i<randomArr.length; i++) {
    //if the number is smaller update the min & position
    if (randomArr[i] < min) {
        min = randomArr[i];
        minPosition = i;
    }
}
console.log("Minimum number position:", minPosition);


//task 4: sort array in descending order

/*for (let i=0; i<randomArr.length; i++) {
    for (let j = i+1; j<randomArr.length; j++) {
        if (randomArr[i] < randomArr[j]) {
            let number = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = number;
        }
    }
}*/
//Create sort for array
randomArr.sort(function (a, b) {
    //compare numbers in descending order
    return b - a;
}); 

console.log("Descending Order:", randomArr);


//task 5 Calculate Average of object values
 //creating object pairs
let grades = {
    Ryan: 65, 
    Jim: 90,
    Karen: 42,
    Isaie: 80
}

let total = 0;
let count = 0;

for (let key in grades) {
    //add the grades to total
    total += grades[key]; 
    count++;
}
 // calculate average
let average = total/count;
console.log("Average grade:", average)

const fruits = ['apple', 'banana'];
frutis[2] = 'cherry'
console.log(fruits.length);