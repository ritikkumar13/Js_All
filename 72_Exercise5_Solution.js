let a = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to server 1",
    "Connection failed.. Retrying....",
    "Connecting to server 2",
    "Connected Successfully.....",
    "Username rithik",
    "Trying brute force",
    "200K password tries...",
    "Match not found",
    "Another 200K password tries...",
    "Match found",
    "Accessing Account",
    "Hacked Successfully"
]

const sleep = async (seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(true)}, seconds * 1000)
    })
}
const showHack = async (message)=>{
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}
(async ( )=>{
    for (let i = 0; i < a.length; i++) {
        await showHack (a[i]);
        
    }
})( )