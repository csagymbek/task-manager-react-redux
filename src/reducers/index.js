import { CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "../actions/types";

const initialState = [];

const tasks = (state = { tasks: initialState }, { type, payload }) => {
  switch (type) {
    case EDIT_TASK:
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    case CREATE_TASK:
      return { tasks: state.tasks.concat(payload) };
    case REMOVE_TASK:
      return { tasks: state.tasks.filter((task) => task.id !== payload.id) };
    default:
      return state;
  }
};

export default tasks;
