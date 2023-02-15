let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")
localStorage.setItem(key, value) 

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
    localStorage.removeItem(key) //Remove kar dega ye item nahi aayega
}

if (key == 0) {
    localStorage.clear(key) //Local storage ko clear kar dega
}

