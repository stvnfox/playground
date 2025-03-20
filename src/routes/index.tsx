import { createFileRoute } from "@tanstack/react-router";

import { ButtonAnimation } from "@/components/blocks/button-animation/component";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ButtonAnimation />
    </div>
  );
}
