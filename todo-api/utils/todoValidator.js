const AppError = require('./appError');
const validateStatus = (status) => {
  const allowedStatuses = ['pending', 'completed'];
  if (!allowedStatuses.includes(status)) {
    throw new AppError(
      `Status is invalid. Must be 'pending' or 'completed'`,
      400,
    );
  }
};

const validateTodo = (todos) => {
  const validateTitle = () => {
    if (typeof todos.title !== 'string') {
      throw new AppError(`Title must be a String`, 400);
    } else if (!todos.title || todos.title.trim() === '') {
      throw new AppError(`Title is required and must not be emtpy`, 400);
    }
  };
  const validateDescription = () => {
    if (typeof todos.description !== 'string') {
      throw new AppError(`Description must be a String`, 400);
    } else if (!todos.description || todos.description.trim() === '') {
      throw new AppError(`Description is required and must not be emtpy`, 400);
    }
  };

  validateTitle();
  validateDescription();
  validateStatus(todos.status);
};
const validateId = (id) => {
  if (typeof id !== 'string') {
    throw new AppError(`id must be a String Object`, 400);
  } else if (!id || id.trim() === '') {
    throw new AppError(`id is required and mustn't be emtpy`, 400);
  }
};

const filterAllowedChanges = (update) => {
  const allowedFields = ['title', 'description', 'status'];
  const safeUpdate = {};
  Object.keys(update).forEach((key) => {
    // Only copy the key if it's in our allowed list
    if (allowedFields.includes(key)) {
      safeUpdate[key] = update[key];
    }
  });
  return safeUpdate;
};

module.exports = {
  validateTodo,
  validateId,
  validateStatus,
  filterAllowedChanges,
}; // Export the validator function
