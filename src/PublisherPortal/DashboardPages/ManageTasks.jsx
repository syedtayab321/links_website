import React, { useState } from "react";
import { Card, Row, Col, Badge, Button, Modal } from "antd";
import { BellOutlined } from "@ant-design/icons";
import './../css/managetask.css';

const TaskManagement = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = {
    received: [
      { id: 1, title: "Task 1", description: "Description of Task 1", status: "Received" },
      { id: 2, title: "Task 2", description: "Description of Task 2", status: "Received" },
    ],
    ongoing: [
      { id: 3, title: "Task 3", description: "Description of Task 3", status: "Ongoing" },
    ],
    completed: [
      { id: 4, title: "Task 4", description: "Description of Task 4", status: "Completed" },
    ],
  };

  const showTaskDetails = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="task-management-page">
      <h2 className="page-title">Task Management</h2>

      <Row gutter={[16, 16]} justify="space-between">
        {/* Received Tasks */}
        <Col xs={24} sm={12} md={8}>
          <Card title="Received Tasks" className="task-card">
            {tasks.received.map((task) => (
              <Card.Grid key={task.id} className="task-item">
                <div className='task-text'>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className='task-btn'>
                  <Button type="link" onClick={() => showTaskDetails(task)}>
                    View Details
                  </Button>
                </div>
              </Card.Grid>
            ))}
          </Card>
        </Col>

        {/* Ongoing Tasks */}
        <Col xs={24} sm={12} md={8}>
          <Card title="Ongoing Tasks" className="task-card">
            {tasks.ongoing.map((task) => (
              <Card.Grid key={task.id} className="task-item">
                <div className='task-text'>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className='task-btn'>
                  <Button type="link" onClick={() => showTaskDetails(task)}>
                  View Details
                </Button>
                </div>
              </Card.Grid>
            ))}
          </Card>
        </Col>

        {/* Completed Tasks */}
        <Col xs={24} sm={12} md={8}>
          <Card title="Completed Tasks" className="task-card">
            {tasks.completed.map((task) => (
              <Card.Grid key={task.id} className="task-item">
                <div className='task-text'>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className='task-btn'>
                  <Button type="link" onClick={() => showTaskDetails(task)}>
                    View Details
                  </Button>
                </div>
              </Card.Grid>
            ))}
          </Card>
        </Col>
      </Row>

      {/* Task Details Modal */}
      {selectedTask && (
        <Modal
          title={selectedTask.title}
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={[
            <Button key="close" onClick={handleModalClose}>
              Close
            </Button>,
          ]}
        >
          <h3>Description:</h3>
          <p>{selectedTask.description}</p>
          <h3>Status: {selectedTask.status}</h3>
        </Modal>
      )}
    </div>
  );
};

export default TaskManagement;
