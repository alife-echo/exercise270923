async function renderListCallApi (...calls){
    for(let call of calls){
       await fetch(call).then(resolve => resolve.json().then(result => console.log(result))).catch(error => console.log(error)) 
    }
}

renderListCallApi(
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/comments/2',
    'https://jsonplaceholder.typicode.com/comments/3',
    'https://jsonplaceholder.typicode.com/albums/1',
    'https://jsonplaceholder.typicode.com/albums/2',
    'https://jsonplaceholder.typicode.com/albums/3',
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/photos/1',
    'https://jsonplaceholder.typicode.com/photos/2',
    'https://jsonplaceholder.typicode.com/photos/3',

)