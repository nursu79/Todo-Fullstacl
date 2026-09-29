// lib/api/todos.ts

import type { CreateTodoInput, Todo, UpdateTodoInput } from "@/types/todo";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

interface GetTodosResponse {
  status: string;
  results: number;
  data: {
    results: Todo[];
  };
}

interface GetTodosOptions {
  status?: "pending" | "completed";
  archived?: boolean;
  page?: number;
  limit?: number;
}

interface CreateTodoResponse {
  status: string;
  data: {
    todo: Todo;
  };
}

interface UpdateTodoResponse {
  status: string;
  data: {
    todo: Todo;
  };
}

export async function getTodos(options: GetTodosOptions = {}): Promise<Todo[]> {
  const params = new URLSearchParams();

  if (options.status) {
    params.set("status", options.status);
  }

  if (options.archived !== undefined) {
    params.set("archived", String(options.archived));
  }

  if (options.page !== undefined) {
    params.set("page", String(options.page));
  }

  if (options.limit !== undefined) {
    params.set("limit", String(options.limit));
  }

  const queryString = params.toString();

  const response = await fetch(
    `${API_URL}/todos${queryString ? `?${queryString}` : ""}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const data: GetTodosResponse = await response.json();

  return data.data.results;
}

export async function createTodo(todo: CreateTodoInput): Promise<Todo> {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  const data: CreateTodoResponse = await response.json();

  return data.data.todo;
}

export async function updateTodo(
  id: string,
  updates: UpdateTodoInput,
): Promise<Todo> {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  const data: UpdateTodoResponse = await response.json();

  return data.data.todo;
}

export async function deleteTodo(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
}

export async function archiveTodo(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/todos/${id}/archive`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Failed to archive todo");
  }
}

export async function unarchiveTodo(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/todos/${id}/unarchive`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Failed to unarchive todo");
  }
}
