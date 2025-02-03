function App() {
let arr1 = [5,6,7,8,9]
// Add 1 to each item in the array

function alterArray(arr) {
    arr[0] = arr[0]+1
    arr[1] = arr[1]+1
    arr[2] = arr[2]+1
    arr[3] = arr[3]+1
    //Only goes up 4 positions so the fifth one isn't affected
}
console.log("Before")
console.log(arr1)
alterArray(arr1)
// Print out the altered array
console.log(arr1)
}
console.log(App())