import React, { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const TaskPage = ({ tasks, onStatusChange, onCreateTask, onRemoveTask }) => {
  const [cardForm, setCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formToggler = (tasks) => {
    setCardForm(!cardForm);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const renderTaskLists = () => {
    return TASK_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div key={id} className="col-md-3 card m-2 p-0">
          <TaskList
            key={uuid()}
            status={status}
            tasks={statusTasks}
            onStatusChange={onStatusChange}
            onRemoveTask={onRemoveTask}
          />
        </div>
      );
    });
  };

  const onCreateTaskHandler = (e) => {
    e.preventDefault();
    onCreateTask({
      title,
      description,
    });
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCardForm(!cardForm);
  };

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success" onClick={formToggler}>
              +
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              Task Manager
            </h2>
          </div>
        </div>
        {cardForm && (
          <form action="" onSubmit={onCreateTaskHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={onChangeTitle}
                title={title}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={onDescriptionChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
      <div
        className="ro d-flex justify-content-center position-relative"
        style={{ background: "#e9ecef" }}
      >
        {renderTaskLists()}
      </div>
    </div>
  );
};

export default TaskPage;
