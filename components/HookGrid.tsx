"use client";

import { useState } from "react";
import type { Hook, HookEvent } from "@/types/hook";
import CategoryFilter from "./CategoryFilter";
import HookCard from "./HookCard";

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  const [activeCategory, setActiveCategory] = useState<HookEvent | null>(null);

  const filtered = activeCategory
    ? hooks.filter((h) => h.category === activeCategory)
    : hooks;

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-6">
        <CategoryFilter selected={activeCategory} onChange={setActiveCategory} />
      </div>

      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-5">
        {filtered.length} hook{filtered.length !== 1 ? "s" : ""}
        {activeCategory ? ` · ${activeCategory}` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="flex items-center justify-center py-24 text-zinc-400 dark:text-zinc-500 font-mono text-sm">
          no hooks found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      )}
    </section>
  );
}
