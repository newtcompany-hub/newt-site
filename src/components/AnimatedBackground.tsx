import { Component as RaycastBackground } from "@/components/ui/raycast-animated-background";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <RaycastBackground />
    </div>
  );
}