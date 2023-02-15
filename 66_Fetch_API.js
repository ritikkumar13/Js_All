let p = fetch("https://goweather.herokuapp.com/weather/LDN")
p.then((Response)=>{
    console.log(Response.status)
    console.log(Response.ok)
    console.log(Response.headers)
    // console.log(Response.text( ))
    return Response.json( )})
    .then((Response)=>{console.log(Response)})
    // Request headers wo hota hai jo ham dete hain infromation le lo, Response header ko print karte hain