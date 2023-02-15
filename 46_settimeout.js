// alert("Hello I am here")

const sum = (a, b)=>{
    console.log("Yes I am Running " +(a + b))
    a + b
}
setTimeout(sum, 1000, 1, 2);

/*

// SetInterval
setInterval(() => {
    alert("SetInterval")
}, 3000);

// Settimeout
let a = setTimeout(() => {
    alert("Hello I am inside SetTimeout")
}, 2000);
let b = prompt("Do you want to run the SetTimeout?")
if("n" == b){
    clearTimeout(a)
}

Through setInterval
let sum = (x, y, z) => {
  document.write(" Yes  i am running " + (x + y + z));
}
setInterval(sum, 3000, 7, 4, 3);

clearInterval()
console.log(a)
*/