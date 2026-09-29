// app/components/todo/TodoPage.tsx

"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo";
import {
  archiveTodo,
  deleteTodo,
  getTodos,
  unarchiveTodo,
  updateTodo,
} from "@/lib/api/todos";
import TodoForm from "./TodoForm";
import TodoHero from "./TodoHero";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";
import TodoFilters, {
  type TodoFilter,
} from "./TodoFilters";

interface TodoPageProps {
  initialTodos: Todo[];
}

const PAGE_LIMIT = 5;

export default function TodoPage({
  initialTodos,
}: TodoPageProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const [activeFilter, setActiveFilter] =
    useState<TodoFilter>("all");

  const [currentPage, setCurrentPage] = useState(1);

  const [hasNextPage, setHasNextPage] = useState(
    initialTodos.length === PAGE_LIMIT
  );

  const [isLoading, setIsLoading] = useState(false);

  const [isCreateModalOpen, setIsCreateModalOpen] =
    useState(false);

  const [editingTodoId, setEditingTodoId] =
    useState<string | null>(null);

  // Keeps a todo locked while its mutation is running.
  const [updatingTodoIds, setUpdatingTodoIds] =
    useState<Set<string>>(new Set());

  function getTodoOptions(
    filter: TodoFilter,
    page: number
  ) {
    if (filter === "pending") {
      return {
        status: "pending" as const,
        page,
        limit: PAGE_LIMIT,
      };
    }

    if (filter === "completed") {
      return {
        status: "completed" as const,
        page,
        limit: PAGE_LIMIT,
      };
    }

    if (filter === "archived") {
      return {
        archived: true,
        page,
        limit: PAGE_LIMIT,
      };
    }

    return {
      page,
      limit: PAGE_LIMIT,
    };
  }

  async function loadTodos(
    filter: TodoFilter,
    page: number,
    options?: {
      showLoading?: boolean;
    }
  ) {
    const showLoading = options?.showLoading ?? true;

    if (showLoading) {
      setIsLoading(true);
    }

    try {
      const updatedTodos = await getTodos(
        getTodoOptions(filter, page)
      );

      setTodos(updatedTodos);

      setHasNextPage(
        updatedTodos.length === PAGE_LIMIT
      );
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
    }
  }

  async function refreshTodos() {
    // Important:
    // Do NOT show the loading screen during normal mutations.
    // The existing list stays visible while fresh data is fetched.
    await loadTodos(activeFilter, currentPage, {
      showLoading: false,
    });
  }

  async function handleFilterChange(
    filter: TodoFilter
  ) {
    setActiveFilter(filter);
    setCurrentPage(1);

    await loadTodos(filter, 1, {
      showLoading: true,
    });
  }

  async function handlePreviousPage() {
    if (currentPage <= 1 || isLoading) {
      return;
    }

    const nextPage = currentPage - 1;

    setCurrentPage(nextPage);

    await loadTodos(activeFilter, nextPage, {
      showLoading: true,
    });
  }

  async function handleNextPage() {
    if (!hasNextPage || isLoading) {
      return;
    }

    const nextPage = currentPage + 1;

    setCurrentPage(nextPage);

    await loadTodos(activeFilter, nextPage, {
      showLoading: true,
    });
  }

  function handleEdit(todoId: string) {
    setEditingTodoId(todoId);
  }

  function handleOpenCreate() {
    setIsCreateModalOpen(true);
  }

  function handleCloseCreate() {
    setIsCreateModalOpen(false);
  }

  function handleCloseEdit() {
    setEditingTodoId(null);
  }

  async function handleCreated() {
    setCurrentPage(1);

    await loadTodos(activeFilter, 1, {
      showLoading: false,
    });

    setIsCreateModalOpen(false);
  }

  async function handleUpdated() {
    await refreshTodos();
    setEditingTodoId(null);
  }

  async function handleToggleComplete(todo: Todo) {
    // Prevent rapid consecutive mutations on the same todo.
    if (updatingTodoIds.has(todo.id)) {
      return;
    }

    setUpdatingTodoIds((current) => {
      const next = new Set(current);
      next.add(todo.id);
      return next;
    });

    try {
      const newStatus =
        todo.status === "completed"
          ? "pending"
          : "completed";

      await updateTodo(todo.id, {
        status: newStatus,
      });

      await refreshTodos();
    } catch (error) {
      console.error(
        "Failed to toggle todo status:",
        error
      );
    } finally {
      setUpdatingTodoIds((current) => {
        const next = new Set(current);
        next.delete(todo.id);
        return next;
      });
    }
  }

  async function handleDelete(todoId: string) {
    if (updatingTodoIds.has(todoId)) {
      return;
    }

    setUpdatingTodoIds((current) => {
      const next = new Set(current);
      next.add(todoId);
      return next;
    });

    try {
      await deleteTodo(todoId);
      await refreshTodos();
    } catch (error) {
      console.error(
        "Failed to delete todo:",
        error
      );
    } finally {
      setUpdatingTodoIds((current) => {
        const next = new Set(current);
        next.delete(todoId);
        return next;
      });
    }
  }

  async function handleArchive(todoId: string) {
    if (updatingTodoIds.has(todoId)) {
      return;
    }

    setUpdatingTodoIds((current) => {
      const next = new Set(current);
      next.add(todoId);
      return next;
    });

    try {
      await archiveTodo(todoId);
      await refreshTodos();
    } catch (error) {
      console.error(
        "Failed to archive todo:",
        error
      );
    } finally {
      setUpdatingTodoIds((current) => {
        const next = new Set(current);
        next.delete(todoId);
        return next;
      });
    }
  }

  async function handleUnarchive(todoId: string) {
    if (updatingTodoIds.has(todoId)) {
      return;
    }

    setUpdatingTodoIds((current) => {
      const next = new Set(current);
      next.add(todoId);
      return next;
    });

    try {
      await unarchiveTodo(todoId);
      await refreshTodos();
    } catch (error) {
      console.error(
        "Failed to unarchive todo:",
        error
      );
    } finally {
      setUpdatingTodoIds((current) => {
        const next = new Set(current);
        next.delete(todoId);
        return next;
      });
    }
  }

  const editingTodo = todos.find(
    (todo) => todo.id === editingTodoId
  );

  return (
    <>
      <TodoHero onAddTodo={handleOpenCreate} />

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
              Your collection
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-stone-900">
              Tasks
            </h2>
          </div>

          <p className="text-sm text-stone-400">
            {todos.length} on this page
          </p>
        </div>

        <TodoFilters
          activeFilter={activeFilter}
          onChange={handleFilterChange}
        />

        {isLoading ? (
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-16 text-center">
            <p className="text-sm text-stone-400">
              Loading your todos...
            </p>
          </div>
        ) : (
          <>
            <TodoList
              todos={todos}
              onEdit={handleEdit}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
              onArchive={handleArchive}
              onUnarchive={handleUnarchive}
            />

            {todos.length === 0 && (
              <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
                <p className="text-lg font-medium text-stone-700">
                  Nothing here yet.
                </p>

                <p className="mt-2 text-sm text-stone-400">
                  {activeFilter === "archived"
                    ? "Your archived todos will appear here."
                    : "Add a todo to get started."}
                </p>
              </div>
            )}
          </>
        )}

        {(currentPage > 1 || hasNextPage) && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePreviousPage}
              disabled={
                currentPage === 1 || isLoading
              }
              className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            <span className="min-w-16 text-center text-sm font-medium text-stone-500">
              Page {currentPage}
            </span>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={!hasNextPage || isLoading}
              className="rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        )}
      </section>

      {isCreateModalOpen && (
        <TodoModal
          title="Create something new"
          onClose={handleCloseCreate}
        >
          <TodoForm
            onCreated={handleCreated}
            onUpdated={handleUpdated}
          />
        </TodoModal>
      )}

      {editingTodo && (
        <TodoModal
          title="Edit your todo"
          onClose={handleCloseEdit}
        >
          <TodoForm
            editingTodo={editingTodo}
            onCreated={handleCreated}
            onUpdated={handleUpdated}
          />
        </TodoModal>
      )}
    </>
  );
}