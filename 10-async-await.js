// Async Await : syntactic sugar untuk promises, memudahkan untuk bekerja dengan promise

// Tanpa async await:
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(json => console.log(json))

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  console.log(json);
}

// arrow function
const ambilTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  console.log(json);
}

getTodos();