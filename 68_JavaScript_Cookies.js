// Cookies through key value pair, Cookies database nahi hai wo data store karne ka tareeka hai
// console.log(document.cookie)
// document.cookie = "name1=Rithik1233211"
// document.cookie = "name2=Rithik12332111"
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
// decodeURIComponent("1%3D%3D") //For decode cookies