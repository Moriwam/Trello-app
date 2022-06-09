import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BoardProvider from "./contexts/board";
import TaskListProvider from "./contexts/taskList";
import TaskProvider from "./contexts/task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BoardProvider>
    <TaskListProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </TaskListProvider>
  </BoardProvider>
);
