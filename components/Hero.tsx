export default function Hero() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-background">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex items-baseline gap-0.5 mb-5">
          <h1 className="font-mono text-5xl font-bold tracking-tight text-foreground leading-none">
            hookhub
          </h1>
          <span
            className="font-mono text-5xl font-bold text-zinc-400 dark:text-zinc-600 leading-none select-none cursor-blink"
            aria-hidden="true"
          >
            _
          </span>
        </div>

        <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-3">
          A curated gallery of open-source Claude Code hooks
        </p>

        <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-2xl leading-relaxed mb-7">
          Claude Code hooks are shell commands that fire at key moments in your
          session — before and after tool calls, at session boundaries, on
          notifications, and more. Browse what the community has built and wire
          the hooks you need into your own workflow.
        </p>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/hooks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          Official hooks documentation
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
