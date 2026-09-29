// app/components/todo/TodoList.tsx

import type { Todo } from "@/types/todo";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: Todo[];
  onEdit: (todoId: string) => void;
  onToggleComplete: (todo: Todo) => Promise<void>;
  onDelete: (todoId: string) => Promise<void>;
  onArchive: (todoId: string) => Promise<void>;
  onUnarchive: (todoId: string) => Promise<void>;
}

export default function TodoList({
  todos,
  onEdit,
  onToggleComplete,
  onDelete,
  onArchive,
  onUnarchive,
}: TodoListProps) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      ))}
    </div>
  );
}
