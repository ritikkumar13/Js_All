// Through the getElementById
document.getElementById("google").addEventListener("click", function(e){
    window.location = "https://www.google.com"
})

// Through the getElementsByClassName [0] is must important
document.getElementsByClassName("facebook")[0].addEventListener("click", function(e){
    window.location = "https://www.facebook.com"
})

// Data fetch through another website
const fetchContent = async (url) => {
    con = await fetch(url)
    let a = await con.json()
    return a
}
setInterval(async function( ){
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)

