let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey i am not resolved")
        resolve(1)
    }, 2000);
})
p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000);
    })
}).then((value)=>{console.log(value)})
p1.then(()=>{
    console.log("Hurray")
})