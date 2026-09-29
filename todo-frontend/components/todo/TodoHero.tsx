// app/components/todo/TodoHero.tsx

"use client";

import { useEffect, useState } from "react";

interface TodoHeroProps {
  onAddTodo: () => void;
}

const messages = [
  "One small thing at a time.",
  "What will you finish today?",
  "Progress starts with one task.",
  "Clear your mind. Keep track.",
  "Make space for what matters.",
];

export default function TodoHero({ onAddTodo }: TodoHeroProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-12 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
        Todo Workspace
      </p>

      <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
        My Todos
      </h1>

      <div className="mt-4 h-7">
        <p
          key={messageIndex}
          className="text-base text-stone-500 transition-opacity duration-500 sm:text-lg"
        >
          {messages[messageIndex]}
        </p>
      </div>

      <button
        type="button"
        onClick={onAddTodo}
        className="mt-8 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
      >
        + Add Todo
      </button>
    </section>
  );
}
