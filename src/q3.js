async function searchData (url) {
    const search = await fetch(url)
    const response = search.json().then(response => {return response})
    return response
  
  }
const promise1 =  searchData('https://jsonplaceholder.typicode.com/todos/1').then(response => {return response}).catch((error)=>{if(error instanceof Error){return error.message}})
const promise2 = '5'
const promise3 = { userId: 2, id: 3, title: 'Estudar', completed: false }

Promise.all([promise1,promise2,promise3]).then(value => console.log(value)).catch(error => console.log(error))