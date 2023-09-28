async function searchData (url) {
    const search = await fetch(url)
    const response = search.json().then(response => {return response})
    return response
  
  }
const promise1 =  searchData('https://jsonplaceholder.typicode.com/todos/1').then(response => {return response}).catch((error)=>{if(error instanceof Error){return error.message}})

const promise2 = new Promise((resolve,reject)=>{
    resolve('5')
})
const promise3 = new Promise((resolve,reject)=>{
    resolve({ userId: 2, id: 3, title: 'Estudar', completed: false })
})


async function resolveTransactions(...promises) {
    Promise.race(promises).then((e)=>console.log(e))
}

resolveTransactions(promise1,promise2, promise3);
