console.log("this is promises")
let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("yes i am done")
        resolve("kashan")
    }, 3000);
})

prom1.then((a)=>{
    console.log(a)
})