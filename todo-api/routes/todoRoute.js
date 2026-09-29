const express = require('express');

const router = express.Router();
const todoControllers = require('../controllers/todoControllers');
/**
 * @swagger
 * /api/v1/todos:
 *   get:
 *     summary: Get todos
 *     parameters:
 *       - in: query
 *         name: archived
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - 'true'
 *             - 'all'
 *         description: |
 *           Controls which archived todos are returned.
 *           If omitted, only non-archived todos are returned.
 *           Use "true" to return only archived todos.
 *           Use "all" to return both archived and non-archived todos.
 *
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - pending
 *             - completed
 *         description: Filter todos by status
 *
 *       - in: query
 *         name: sort
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - newest
 *             - oldest
 *           default: newest
 *         description: Sort todos by creation date
 *
 *       - in: query
 *         name: fields
 *         required: false
 *         schema:
 *           type: string
 *         example: id,title,status
 *         description: Select specific fields to return
 *
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 10
 *         description: Number of todos per page
 *
 *     responses:
 *       200:
 *         description: Successfully retrieved todos
 *       400:
 *         description: Invalid query parameter
 */
router
  .route('/')
  .get(todoControllers.getAllTodos)
  .post(todoControllers.createTodo);

/**
 * @swagger
 * /api/v1/todos/{id}:
 *   get:
 *     summary: Get a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the todo
 *       404:
 *         description: Todo not found
 *       400:
 *         description: Invalid ID
 *
 *   patch:
 *     summary: Update a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - completed
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Todo not found
 *
 *   delete:
 *     summary: Delete a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Todo deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Todo not found
 */

router
  .route('/:id')
  .get(todoControllers.getTodoById)
  .patch(todoControllers.updateTodo)
  .delete(todoControllers.deleteTodo);

/**
 * @swagger
 * /api/v1/todos/{id}/archive:
 *   patch:
 *     summary: Archive a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo archived successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Todo not found
 */
router.route('/:id/archive').patch(todoControllers.archiveTodo);

/**
 * @swagger
 * /api/v1/todos/{id}/unarchive:
 *   patch:
 *     summary: Unarchive a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo unarchived successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Todo not found
 */
router.route('/:id/unarchive').patch(todoControllers.unarchiveTodo);

module.exports = router;
