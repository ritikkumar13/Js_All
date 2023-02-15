let arr = [3, 5, 9, 12, 34, 56, 78]
// No need to do this
// let a = arr[0]
// let b = arr[1]
/*
Yahi hai destructuring
let [a, b, c, d, ...rest] = arr 
console.log(a, b, c, d, rest)

let [a, b, , ...rest] = arr
console.log(a, b, rest)

let {a, b} = {a : 1, b: 5}
console.log(a, b)
*/

// Spread operator
let arr1 = [3, 5, 9, 12, 34, 56, 78]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3, v4){
    return v1 + v2 + v3 + v4
}
console.log(sum(...arr1))

// Object me kuch change karne ke liye React me jada use hoga
let obj2 = {
    name : "Rithik",
    company : "Google",
    address : "Up"
}
console.log({...obj2, name: "Good"})
console.log({name: "Good", ...obj2}) //This will print obj without changing their value