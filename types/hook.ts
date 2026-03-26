export type HookEvent =
  | "PreToolUse"
  | "PostToolUse"
  | "SessionStart"
  | "SessionEnd"
  | "UserPromptSubmit"
  | "PreCompact"
  | "Notification"
  | "Stop";

export interface Hook {
  id: string;
  name: string;
  category: HookEvent;
  description: string;
  repoUrl: string;
  author: string;
  tags?: string[];
}

export const HOOK_EVENT_COLORS: Record<HookEvent, string> = {
  PreToolUse: "#f59e0b",
  PostToolUse: "#22c55e",
  SessionStart: "#3b82f6",
  SessionEnd: "#a855f7",
  UserPromptSubmit: "#f43f5e",
  PreCompact: "#14b8a6",
  Notification: "#f97316",
  Stop: "#ef4444",
};

export const ALL_HOOK_EVENTS: HookEvent[] = [
  "PreToolUse",
  "PostToolUse",
  "SessionStart",
  "SessionEnd",
  "UserPromptSubmit",
  "PreCompact",
  "Notification",
  "Stop",
];
