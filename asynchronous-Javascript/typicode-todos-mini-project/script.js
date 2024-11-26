const apiURL = 'https://jsonplaceholder.typicode.com/todos';
const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

function getTodos() {
  fetch(apiURL + '?_limit=8')
    .then((res) => res.json())
    .then((data) =>
      data.forEach((data) => {
        createTodos(data);
      })
    );
}

function addTodos(e) {
  e.preventDefault();
  const input = form.querySelector('input');

  const newTodo = {
    title: input.value,
    completed: false,
  };

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      createTodos(data);
      input.value = '';
    });
}

function createTodos(data) {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(data.title));
  div.setAttribute('data-id', data.id);

  if (data.completed) {
    div.style.backgroundColor = '#ccc';
  }
  document.getElementById('todo-list').appendChild(div);
}

function toggleClass(e) {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
  }

  updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
}

function updateTodo(id, completed) {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function deleteTodo(e) {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
}

document.addEventListener('DOMContentLoaded', getTodos);
form.addEventListener('submit', addTodos);
todoList.addEventListener('click', toggleClass);
todoList.addEventListener('dblclick', deleteTodo);
