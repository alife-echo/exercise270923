async function searchData (url) {
  const search = await fetch(url)
  const response = search.json().then(response => {return response})
  return response

}
searchData('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response)).catch((error)=>{if(error instanceof Error){console.log(error.message)}})