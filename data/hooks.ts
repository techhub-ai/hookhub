import type { Hook } from "@/types/hook";

export const hooks: Hook[] = [
  {
    id: "protect-tests",
    name: "Protect Tests",
    category: "PreToolUse",
    description:
      "Blocks Claude from modifying test files during tool execution, ensuring your test suite stays untampered and regressions can't be silently introduced.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["safety", "testing"],
  },
  {
    id: "branch-guard",
    name: "Branch Guard",
    category: "PreToolUse",
    description:
      "Prevents Claude from making changes directly on protected branches like main or production, enforcing branch hygiene automatically.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["safety", "git"],
  },
  {
    id: "rate-limiter",
    name: "Rate Limiter",
    category: "PreToolUse",
    description:
      "Throttles tool call frequency to prevent runaway sessions from burning through your API budget unexpectedly.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["safety", "cost"],
  },
  {
    id: "hook-lifecycle-logger",
    name: "Hook Lifecycle Logger",
    category: "PreToolUse",
    description:
      "Logs every hook event with timestamp, tool name, and metadata — essential for debugging and auditing your full hook chain.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["logging", "debugging"],
  },
  {
    id: "auto-format",
    name: "Auto Format",
    category: "PostToolUse",
    description:
      "Automatically runs your formatter (Prettier, Black, gofmt, etc.) after Claude edits a file, keeping code style consistent without extra prompting.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["formatting", "dx"],
  },
  {
    id: "prompt-injection-defender",
    name: "Prompt Injection Defender",
    category: "PostToolUse",
    description:
      "Scans tool outputs for prompt injection attempts before they reach Claude's next reasoning step, blocking jailbreak vectors from untrusted content.",
    repoUrl: "https://github.com/lasso-security/claude-hooks",
    author: "lasso-security",
    tags: ["safety", "security"],
  },
  {
    id: "typecheck-changed",
    name: "Typecheck Changed",
    category: "PostToolUse",
    description:
      "Runs TypeScript type-checking only on files Claude has modified, surfacing type errors immediately after each edit without a full project rebuild.",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg",
    tags: ["typescript", "quality"],
  },
  {
    id: "lint-changed",
    name: "Lint Changed",
    category: "PostToolUse",
    description:
      "Runs ESLint on changed files after Claude edits them, blocking unclean code from accumulating in your codebase between reviews.",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg",
    tags: ["linting", "quality"],
  },
  {
    id: "self-review",
    name: "Self Review",
    category: "PostToolUse",
    description:
      "Triggers a structured self-review prompt after Claude finishes writing code, catching logic errors and code smells before you see the output.",
    repoUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg",
    tags: ["quality", "review"],
  },
  {
    id: "context-injector",
    name: "Context Injector",
    category: "SessionStart",
    description:
      "Injects project-specific context — environment info, stack details, team conventions — at the start of every session so Claude is always oriented.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["context", "productivity"],
  },
  {
    id: "session-summary",
    name: "Session Summary",
    category: "SessionEnd",
    description:
      "Generates a structured markdown summary of everything Claude accomplished during the session, written to your project directory when the session ends.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["logging", "productivity"],
  },
  {
    id: "rules-injector",
    name: "Rules Injector",
    category: "UserPromptSubmit",
    description:
      "Prepends your project's coding rules and guidelines to every user prompt before Claude processes it, ensuring conventions are always in scope.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["context", "rules"],
  },
  {
    id: "context-snapshot",
    name: "Context Snapshot",
    category: "PreCompact",
    description:
      "Saves a snapshot of the current conversation context to disk before Claude compacts it, preserving a full audit trail of your session history.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["context", "persistence"],
  },
  {
    id: "ntfy-notify",
    name: "ntfy Notify",
    category: "Notification",
    description:
      "Routes Claude's notifications to your phone via ntfy.sh push notifications, so you're alerted even when away from your terminal.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["notifications", "mobile"],
  },
  {
    id: "discord-notify",
    name: "Discord Notify",
    category: "Notification",
    description:
      "Sends Claude's notifications to a Discord channel via webhook, keeping your team in the loop on AI-assisted activity across the project.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["notifications", "discord"],
  },
  {
    id: "tts-alerts",
    name: "TTS Alerts",
    category: "Notification",
    description:
      "Converts Claude's notification messages to speech using your system's text-to-speech engine, so you hear important alerts out loud while working.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["notifications", "accessibility"],
  },
  {
    id: "voice-integration",
    name: "Voice Integration",
    category: "Notification",
    description:
      "Plays audio feedback for Claude Code notifications using your system's voice synthesis engine for fully hands-free session monitoring.",
    repoUrl: "https://github.com/shanraisshan/claude-code-hooks",
    author: "shanraisshan",
    tags: ["notifications", "voice"],
  },
  {
    id: "cost-tracker",
    name: "Cost Tracker",
    category: "Stop",
    description:
      "Logs token usage and estimated API cost when a Claude session ends, appending to a running ledger so you can track and budget your spending over time.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["cost", "monitoring"],
  },
];
