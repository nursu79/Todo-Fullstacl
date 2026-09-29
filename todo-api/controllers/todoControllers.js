const Todo = require('../models/todoModel');
const APIFeatures = require('../utils/apiFeature');
const catchAsync = require('../utils/catchAsync');

exports.getAllTodos = catchAsync(async (req, res, next) => {
  const todos = await Todo.getTodos();
  const features = new APIFeatures(todos, req.query)
    .archive()
    .filter()
    .sort()
    .paginate();
  const results = features.query;
  res.status(200).json({
    status: 'sucess',
    results: results.length,
    data: {
      results,
    },
  });
});

exports.getTodoById = catchAsync(async (req, res, next) => {
  const todo = await Todo.getTodoById(req.params.id);
  res.status(200).json({
    status: 'sucess',
    data: {
      todo,
    },
  });
});

exports.createTodo = catchAsync(async (req, res, next) => {
  const newTodo = await Todo.createTodo(
    req.body.title,
    req.body.description,
    req.body.status,
  );
  res.status(201).json({
    status: 'success',
    data: {
      todo: newTodo,
    },
  });
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.updateTodo(req.params.id, req.body);

  res.status(200).json({
    status: 'success',
    data: {
      todo: todo,
    },
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.deleteTodo(req.params.id);

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});

exports.archiveTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.archiveTodo(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      todo,
    },
  });
});

exports.unarchiveTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.unarchiveTodo(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      todo,
    },
  });
});
