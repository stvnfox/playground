import { Navigation } from "@/components/pages/navigation/Navigation"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/navigation")({
    component: Navigation,
})