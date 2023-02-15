//Syncronous Programming
/*
let a = prompt("What is your name?")
let a = prompt("What is your age?")
let a = prompt("What is your favourite color?")
console.log(a, b, c)
*/

// Asynchronous Programming
/*

console.log("Start")
setTimeout(function( ) {
    console.log("Hey i am good")
}, 3000);
console.log("End")
*/

// Callbacks
function loadScript(src, Callbacks){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function( ){
        console.log("Script loded " + src)
        Callbacks(null, src)
    }
    //Agar koi error aayega loadscript load nahi hoga toh
    script.onerror = function( ){
        console.log("Error loading script " + src)
        Callbacks(new Error("Src got some Error"))
    }
    document.body.appendChild(script)
}
function hello(error, src){
    if (error) {
        console.log(error)
        return
    }
    alert("Hello World!" + src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js", hello)