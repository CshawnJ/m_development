function App() {
    //Add 1 to each iteem to the array
    let arr1 = [{cost:1, desc:"Eggs"}, {cost:2, desc:"Milk"}, {cost:3, desc:"Gas"}]
    let obj = {b:2, a:3}
    console.log((obj))
    let obj2 = {...obj, c:3, d:5}
    console.log(obj2)
    console.log(obj===obj2)
    let arr2 = [1,2,3]
    console.log(arr2)
    let arr3 = [...arr2]
    console.log(arr3)
    function alterArray(arr) {

        return arr.map((value) => {
            return {desc: value.desc, cost:value.cost+1}
        })
    }
}
console.log(App())