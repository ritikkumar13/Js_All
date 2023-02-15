// Solution 1
const a = async(Text, n = 2)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Text)
        }, 1000 * n);
    })
}
(
    async( )=>{
        let Text = await a("Hello")
        console.log(Text)
        Text = await a ("Hello 2")
        console.log(Text)
    }
)( )

// Solution 2
function sum(a, b, c){
    return a + b + c
}
let x = [1, 3, 6]
console.log(sum(...x));

// Solution 3
(
    async( )=>{
        let Text = await a("I am resolving after 1 second", 1)
        console.log(Text)
        Text = await a ("I am resolving after 4 second", 4)
        console.log(Text)
    }
)( )

// Solution 4
function simple(p, r, t){
    return (p * r * t) /100
}
let y = [1000, 5 , 1]
console.log(simple(...y))