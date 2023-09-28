async  function fakeGetData () {
    try {
        const get = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if(!(get.status === 200)){
            throw new Error('Error ao buscar dados')
        }
        return get.json()
    }
   catch(error) {
      throw new Error('-----Error ao buscar dados -------- ' + error.message)
   }
}   
fakeGetData().then(data => console.log(data))