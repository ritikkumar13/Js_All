let a = ( )=>{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(56)
    }, 4000);
})
} 

// Bracket ke aandar daal do fir Bracket ko call kar do
(async ( )=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})( )