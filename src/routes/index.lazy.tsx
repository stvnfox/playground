import { Dashboard } from "@/components/pages/dashboard/Dashboard"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
    component: Dashboard,
})


