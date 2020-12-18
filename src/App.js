import React from "react";
import TaskListContextProvider from './Context/TaskListContext';
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoForm } from "./Components/TodoForm/TodoForm";

import '../src/App.css';
import { Heading } from "./Components/Heading/heading";


const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Heading />
          <div className="main">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
