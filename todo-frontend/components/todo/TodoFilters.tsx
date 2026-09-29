// app/components/todo/TodoFilters.tsx

"use client";

export type TodoFilter = "all" | "pending" | "completed" | "archived";

interface TodoFiltersProps {
  activeFilter: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

const filters: {
  value: TodoFilter;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "archived", label: "Archived" },
];

export default function TodoFilters({
  activeFilter,
  onChange,
}: TodoFiltersProps) {
  return (
    <nav
      aria-label="Todo filters"
      className="mb-8 flex flex-wrap items-center gap-1 border-b border-stone-200"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={`relative px-4 py-3 text-sm font-medium transition ${
              isActive
                ? "text-stone-900"
                : "text-stone-400 hover:text-stone-700"
            }`}
          >
            {filter.label}

            {isActive && (
              <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-stone-900" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
