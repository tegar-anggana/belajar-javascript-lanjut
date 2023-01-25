// fetch memudahkan untuk mengambil data dari external source
// sintaks : fetch(url, {options})

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(json => console.log(json))

// Secara default, tanpa options, fetch memakai GET method.

// Menggunakan method lain:
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "New Todo",
    completed: false,
    userId: 2
  }),
  headers: {
    "Content-type": "application/json"
  }
})
  .then(response => response.json())
  .then(json => console.log(json))

// Console output
// {
//   id: 201,
//   title: "New Todo",
//   completed: false,
//   userId: 2
// }