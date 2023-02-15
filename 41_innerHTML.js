let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

/*
first.innerHTML
first.innerHTML= "<i>Hey i am italic</i>"
first.outerHTML
first.outerHTML = "<div>Hey</div>"
*/
console.log(document.body.textContent)
console.log(document.body.firstChild.data)
first.hidden = false