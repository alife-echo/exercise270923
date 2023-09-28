function returnRejectPromise (time) {
    setTimeout(()=> {
        new Promise((resolve,reject)=>{
            reject(console.log('\n\n------rejeitado------\n\n'))
        })
    },time)
}

returnRejectPromise(1000)
