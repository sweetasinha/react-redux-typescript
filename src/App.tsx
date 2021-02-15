import React from "react";
import "./App.css";
import AddTodo from "./features/todoList/AddTodo";
import TodoList from "./features/todoList/TodoList";
import Footer from "./features/visibilityFilter/Footer";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
