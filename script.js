const container = document.getElementById("todos");

const showTodos = async () => {
  const data = await getTodos();

  data.todos.forEach((todo) => {
    const div = document.createElement("div");

    const p = document.createElement("p");

    p.innerText = todo.todo;

    div.appendChild(p);

    container.appendChild(div);
  });
};

const getTodos = async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const todos = await res.json();
  return todos;
};
