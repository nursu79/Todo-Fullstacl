// app/components/todo/TodoForm.tsx

"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { createTodo, updateTodo } from "@/lib/api/todos";
import type { Todo } from "@/types/todo";

interface TodoFormProps {
  onCreated: () => Promise<void>;
  onUpdated: () => Promise<void>;
  editingTodo?: Todo;
}

export default function TodoForm({
  onCreated,
  onUpdated,
  editingTodo,
}: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isEditing = Boolean(editingTodo);

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }

    setError("");
  }, [editingTodo]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      if (editingTodo) {
        await updateTodo(editingTodo.id, {
          title,
          description,
        });

        await onUpdated();
      } else {
        await createTodo({
          title,
          description,
        });

        await onCreated();

        setTitle("");
        setDescription("");
      }
    } catch {
      setError(
        isEditing
          ? "Failed to update todo. Please try again."
          : "Failed to create todo. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Title
        </label>

        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Finish RL assignment"
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-2 focus:ring-stone-200"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Description
          <span className="ml-1 font-normal text-stone-400">(optional)</span>
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add a little more context..."
          rows={4}
          className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:ring-2 focus:ring-stone-200"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? isEditing
            ? "Updating..."
            : "Creating..."
          : isEditing
            ? "Update Todo"
            : "Create Todo"}
      </button>
    </form>
  );
}
