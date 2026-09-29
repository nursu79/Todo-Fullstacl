const fs = require('fs').promises;
const path = require('path');
const { randomUUID } = require('crypto');

const filePath = path.join(__dirname, '../dev-data/todos.json');
const AppError = require('../utils/appError.js');
const {
  validateTodo,
  validateId,
  filterAllowedChanges,
} = require('../utils/todoValidator.js');
const getTodos = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  const todos = JSON.parse(data);
  return todos;
};
const saveTodos = async (todos) => {
  const content = JSON.stringify(todos, null, 2);
  await fs.writeFile(filePath, content, 'utf-8');
};
const getTodoById = async (id) => {
  validateId(id);
  const todos = await getTodos();
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    throw new AppError(`There is not todo with this ${id}`, 404);
  }
  return todo;
};

const updateTodo = async (id, update) => {
  validateId(id);
  const todos = await getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new AppError(`There is not todo with this ${id}`, 404);
  }

  const safeUpdate = filterAllowedChanges(update);
  const updatedItem = {
    ...todos[index],
    ...safeUpdate,
    updatedAt: new Date().toISOString(),
  };
  validateTodo(updatedItem);
  todos[index] = updatedItem;
  await saveTodos(todos);
  return updatedItem;
};
const deleteTodo = async (id) => {
  validateId(id);
  const todos = await getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new AppError(`There is not todo withi this ${id}`, 404);
  }
  const [deletedItem] = todos.splice(index, 1);
  await saveTodos(todos);
  return deletedItem;
};
const createTodo = async (title, description, status = 'pending') => {
  const todos = await getTodos();
  const newTodo = {
    id: randomUUID(),
    title: title,
    status: status,
    description: description,
    archived: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  validateTodo(newTodo);
  todos.push(newTodo);
  await saveTodos(todos);
  return newTodo;
};

const archiveTodo = async (id) => {
  validateId(id);
  const todos = await getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new AppError(`There is not todo withi this ${id}`, 404);
  }
  todos[index].archived = true;
  todos[index].updatedAt = new Date().toISOString();

  await saveTodos(todos);
  const todo = todos[index];
  return todo;
};
const unarchiveTodo = async (id) => {
  validateId(id);
  const todos = await getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    throw new AppError(`There is not todo withi this ${id}`, 404);
  }
  todos[index].archived = false;
  todos[index].updatedAt = new Date().toISOString();
  await saveTodos(todos);
  const todo = todos[index];
  return todo;
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  archiveTodo,
  unarchiveTodo,
};
