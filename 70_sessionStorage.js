// Session Storage sird 1 session tak matlab 1 tab tak kaam karega
/*
sessionStorage.getItem("name")
sessionStorage.clear( )
sessionStorage.removeItem("name")
sessionStorage.setItem("name", "harry")
sessionStorage.removeItem("name")
*/

window.onstorage = (e)=> {
    alert("Changed ")
    console.log(e)
}