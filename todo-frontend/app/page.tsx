// app/page.tsx

import TodoPage from "@/components/todo/TodoPage";
import { getTodos } from "@/lib/api/todos";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <TodoPage initialTodos={todos} />
      </div>
    </main>
  );
}
