import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];
const Task = (props) => {
  const onStatusChange = (e) => {
    props.onStatusChange(props.task.id, e.target.value);
  };

  const onRemoveTask = () => {
    props.onRemoveTask(props.task.id);
  };

  return (
    <>
      <form action="" onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASK_STATUSES.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <h2
        className="card-title mt-3 text-uppercase px-2"
        style={{ color: "#3a4" }}
      >
        {props.task.title}
      </h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.task.description}
      </p>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className="float-right m-5"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onRemoveTask(props.task.id)}
      />
    </>
  );
};
export default Task;
