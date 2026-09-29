// app/components/todo/TodoCard.tsx

import type { Todo } from "@/types/todo";

interface TodoCardProps {
  todo: Todo;
  onEdit: (todoId: string) => void;
  onToggleComplete: (todo: Todo) => Promise<void>;
  onDelete: (todoId: string) => Promise<void>;
  onArchive: (todoId: string) => Promise<void>;
  onUnarchive: (todoId: string) => Promise<void>;

  // Optional so TodoList does not need to change.
  isUpdating?: boolean;
}

export default function TodoCard({
  todo,
  onEdit,
  onToggleComplete,
  onDelete,
  onArchive,
  onUnarchive,
  isUpdating = false,
}: TodoCardProps) {
  const isCompleted = todo.status === "completed";
  const isArchived = todo.archived;

  return (
    <article
      className={`group rounded-2xl border bg-white p-5 transition sm:p-6 ${
        isArchived
          ? "border-stone-200 opacity-75"
          : "border-stone-200 hover:border-stone-300 hover:shadow-sm"
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 gap-4">
          <button
            type="button"
            onClick={() => onToggleComplete(todo)}
            disabled={isUpdating}
            aria-label={
              isCompleted ? "Mark todo as pending" : "Mark todo as completed"
            }
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs transition ${
              isCompleted
                ? "border-emerald-500 bg-emerald-500 text-white"
                : "border-stone-300 hover:border-stone-500"
            } disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {isUpdating ? "…" : isCompleted ? "✓" : ""}
          </button>

          <div className="min-w-0">
            <h3
              className={`break-words text-lg font-semibold ${
                isCompleted ? "text-stone-400 line-through" : "text-stone-900"
              }`}
            >
              {todo.title}
            </h3>

            {todo.description && (
              <p
                className={`mt-1 break-words text-sm leading-6 ${
                  isCompleted ? "text-stone-400" : "text-stone-500"
                }`}
              >
                {todo.description}
              </p>
            )}
          </div>
        </div>

        <span
          className={`self-start rounded-full px-3 py-1 text-xs font-medium ${
            isArchived
              ? "bg-stone-100 text-stone-500"
              : isCompleted
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
          }`}
        >
          {isArchived ? "Archived" : isCompleted ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4">
        {!isArchived && (
          <button
            type="button"
            onClick={() => onToggleComplete(todo)}
            disabled={isUpdating}
            className="rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUpdating
              ? "Updating..."
              : isCompleted
                ? "Mark Pending"
                : "Complete"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onEdit(todo.id)}
          disabled={isUpdating}
          className="rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Edit
        </button>

        {isArchived ? (
          <button
            type="button"
            onClick={() => onUnarchive(todo.id)}
            disabled={isUpdating}
            className="rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUpdating ? "Updating..." : "Unarchive"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onArchive(todo.id)}
            disabled={isUpdating}
            className="rounded-lg px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUpdating ? "Updating..." : "Archive"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          disabled={isUpdating}
          className="rounded-lg px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isUpdating ? "Updating..." : "Delete"}
        </button>
      </div>
    </article>
  );
}
