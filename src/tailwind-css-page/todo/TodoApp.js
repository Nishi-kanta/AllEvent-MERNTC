import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]); // State for ToDo list
  const [newTodo, setNewTodo] = useState(""); // State for new ToDo
  const [search, setSearch] = useState(""); // State for search input

  // Fetch initial ToDos from API
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  // Create a new ToDo
  const addTodo = () => {
    if (!newTodo.trim()) return; // Avoid adding empty ToDos
    const newEntry = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newEntry]);
    setNewTodo(""); // Clear input
  };

  // Update a ToDo (toggle completed status)
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a ToDo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // Search ToDos
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredTodos);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>ToDo App</h1>

      {/* Add ToDo Section */}
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "70%" }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px" }}>
          Add
        </button>
      </div>

      {/* Search Section */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search todos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      {/* ToDo List */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredTodos.length ? (
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                marginBottom: "5px",
              }}
            >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <div>
                <button
                  onClick={() => updateTodo(todo.id)}
                  style={{
                    marginRight: "10px",
                    background: todo.completed ? "green" : "orange",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{
                    background: "red",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No ToDos found</p>
        )}
      </ul>
    </div>
  );
};

export default TodoApp;