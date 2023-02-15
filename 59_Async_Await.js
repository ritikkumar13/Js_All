// Ham kisi bhe function ko async bana sakte hai or promise ko await kara sakte hain
async function rithik( ){
let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("27 deg")
    }, 2000);
})

let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("25 deg")
    }, 5000);
})
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fetching dehli weather please wait......")
    let delhiW = await delhiWeather
    console.log("Fetched delhi weather :  " + delhiW)

    console.log("Fetching banglore weather please wait......")
    let bangloreW = await bangloreWeather
    console.log("Fetched banglore weather :  " + bangloreW)
    return [delhiW, bangloreW]
}
console.log("Welcome to weather control room")
let a = rithik( )
a.then((value)=>{
    console.log(value)
})
// function along with its lexical scope co bundle together forms a closer