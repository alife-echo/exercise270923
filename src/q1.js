
const returnPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve('resolvido')
    },600)
})

returnPromise.then((resolve)=>console.log(resolve))