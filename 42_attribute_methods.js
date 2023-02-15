let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style")) //False kyun ki style nahi hai
// first.setAttribute("hidden", "true") //Class ko laga dega
// first.removeAttribute("class") //Class ko remove kar dega
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)