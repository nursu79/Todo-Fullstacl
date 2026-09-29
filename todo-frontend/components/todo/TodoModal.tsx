// app/components/todo/TodoModal.tsx

"use client";

import type { ReactNode } from "react";

interface TodoModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function TodoModal({
  title,
  children,
  onClose,
}: TodoModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 px-4 py-8 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl sm:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
              Todo
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-stone-900">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-stone-400 transition hover:bg-stone-100 hover:text-stone-800"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
