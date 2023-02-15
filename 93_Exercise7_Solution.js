class Password{
    constructor( ){
        console.log("Welcome to password generator")
        this.pass = " "
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "123456789"
        let special = "!@#$%^&*()"
        if (len<3) {
            console.log("Your password should be atleast 4 character long")
        } else {
            let i =0;
            while(i < len){
                this.pass += chars[Math.floor(Math.random( ) * chars.length)]
                this.pass += numbers[Math.floor(Math.random( ) * numbers.length)]
                this.pass += special[Math.floor(Math.random( ) * special.length)]
                i +=3;
            }
            this.pass = this.pass.substr(0, len)
            return this.pass;
        }
    }
}

let p = new Password( )
console.log(p.generatePassword(7))