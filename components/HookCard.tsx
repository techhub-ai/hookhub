import type { Hook } from "@/types/hook";
import { HOOK_EVENT_COLORS } from "@/types/hook";

interface HookCardProps {
  hook: Hook;
}

export default function HookCard({ hook }: HookCardProps) {
  const { name, category, description, repoUrl, author, tags } = hook;
  const color = HOOK_EVENT_COLORS[category];

  return (
    <article
      className="relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1 p-5 pl-[18px] gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-mono font-semibold text-sm leading-snug text-foreground">
            {name}
          </h3>
          <span
            className="flex-shrink-0 font-mono text-[10px] font-medium px-2 py-0.5 rounded-full leading-5"
            style={{
              color,
              backgroundColor: `${color}20`,
            }}
          >
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
          <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            @{author}
          </span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </article>
  );
}
