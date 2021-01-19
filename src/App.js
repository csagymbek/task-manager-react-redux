import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import TaskPage from "./components/TaskPage";
import { createTask, editTask, removeTask } from "./actions";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  };

  return (
    <>
      <TaskPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onRemoveTask={onRemoveTask}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(App);
