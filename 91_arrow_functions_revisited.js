const sayHello = (name) => console.log("Hello World " + name)

const x = {
    name : "Rithik",
    role : "JS Devloper",
    exp : "None",
    show : function( ){
        // let that = this
        // console.log(this)
        // Arrow function agar laga denge na toh that ka use karne ki jarurat nahi hai
        setTimeout(( ) => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000);
    }
}

// sayHello("Rithik")
x.show( )