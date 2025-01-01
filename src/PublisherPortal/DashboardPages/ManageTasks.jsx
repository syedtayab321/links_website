import React from "react";
import { Tabs, Badge } from "antd";
import "./../css/managetask.css";

const ManageTasks = () => {
  const tasks = {
    received: [
      { title: "Task 1: Content Review" },
      { title: "Task 2: Keyword Optimization" },
    ],
    ongoing: [{ title: "Task 3: Link Building" }],
    completed: [{ title: "Task 4: Meta Tag Update" }],
  };

  const renderTasks = (taskList) =>
    taskList.map((task, index) => (
      <div key={index} className="task-item">
        <span className="task-title">{task.title}</span>
      </div>
    ));

  const tabItems = [
    {
      label: (
        <span>
          Received <Badge count={tasks.received.length} className="custom-badge" />
        </span>
      ),
      key: "1",
      children: <div className="tasks-container">{renderTasks(tasks.received)}</div>,
    },
    {
      label: (
        <span>
          Ongoing <Badge count={tasks.ongoing.length} className="custom-badge" />
        </span>
      ),
      key: "2",
      children: <div className="tasks-container">{renderTasks(tasks.ongoing)}</div>,
    },
    {
      label: (
        <span>
          Completed <Badge count={tasks.completed.length} className="custom-badge" />
        </span>
      ),
      key: "3",
      children: <div className="tasks-container">{renderTasks(tasks.completed)}</div>,
    },
  ];

  return (
    <div className="container mt-5 manage-tasks">
      <h2 className="tasks-header">Manage Tasks</h2>
      <Tabs defaultActiveKey="1" items={tabItems} className="tasks-tabs" />
    </div>
  );
};

export default ManageTasks;
