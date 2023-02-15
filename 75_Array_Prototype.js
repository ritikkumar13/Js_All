let a = {
    name : "Rithik",
    language : "Javascript",
         run: ( )=>{
            alert("Self Run")
        }
}
console.log(a)

let p = {
    run: ( )=>{
        alert("Run")
    }
}

a.__proto__ = p
a.run( )

p.__proto__ ={
    name: "Jackie"
}

a.__proto__ = p
a.run( )
console.log(a.name)
