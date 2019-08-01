import PropTypes from "prop-types";

export const TYPE_TASK_MANAGER = {
  newTask: 1,
  editTask: 2
};

TYPE_TASK_MANAGER.propTypes = {
  newTask: PropTypes.number,
  editTask: PropTypes.number
};
