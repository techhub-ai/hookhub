import { hooks } from "@/data/hooks";
import Hero from "@/components/Hero";
import HookGrid from "@/components/HookGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <HookGrid hooks={hooks} />
    </>
  );
}
