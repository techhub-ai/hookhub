import { HookEvent, HOOK_EVENT_COLORS, ALL_HOOK_EVENTS } from "@/types/hook";

interface CategoryFilterProps {
  selected: HookEvent | null;
  onChange: (category: HookEvent | null) => void;
}

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2"
      style={{ scrollbarWidth: "none" }}
    >
      <button
        onClick={() => onChange(null)}
        className={[
          "flex-shrink-0 px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all",
          selected === null
            ? "bg-foreground text-background"
            : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700",
        ].join(" ")}
      >
        All
      </button>

      {ALL_HOOK_EVENTS.map((category) => {
        const color = HOOK_EVENT_COLORS[category];
        const isActive = selected === category;

        return (
          <button
            key={category}
            onClick={() => onChange(isActive ? null : category)}
            className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all"
            style={
              isActive
                ? {
                    backgroundColor: color,
                    color: "#fff",
                  }
                : {
                    backgroundColor: `${color}18`,
                    color: color,
                  }
            }
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: isActive ? "rgba(255,255,255,0.7)" : color,
              }}
              aria-hidden="true"
            />
            {category}
          </button>
        );
      })}
    </div>
  );
}
