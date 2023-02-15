// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element , Last element ko remove karega
// console.log(num, r)
// let r = num.push(56) // push returns the new array length, Ye Nya array aandar daal dega
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array,Suruwaat element ko remove karega

let r = num.unshift(78) //Suruwaat me add kar dega 
console.log(r, num)
console.log(r)