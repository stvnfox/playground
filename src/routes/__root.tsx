import React, { Suspense } from "react"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Sidebar } from "@/components/layout/Sidebar"

const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
        ? () => null // Render nothing in production
        : React.lazy(() =>
              // Lazy load in development
              import("@tanstack/router-devtools").then((res) => ({
                  default: res.TanStackRouterDevtools,
              }))
          )

export const Route = createRootRoute({
    component: () => (
        <>
            <Sidebar />
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
        </>
    ),
})
