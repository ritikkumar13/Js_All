let x = function(e){ 
    //E is event pointer event
    // console.log(event.target)
    // console.log(event.type, event.clientX, event.clientY) //User ne kaha click kiya ye pata chalega client se
    alert("Hello World 1 !!")
}
let y = function(e){
    alert("Hello World 2 !!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = prompt("What is your favourite number?")

if(a == "2"){
    btn.removeEventListener('click', x)
}
