import { FunctionComponent } from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { menuItems } from "@/lib/navigation"
import { Button } from "@/components/ui/button"

export const ArrowNavigation: FunctionComponent = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const currentRoute = location.pathname

    const dashboardIndex = 0
    const currentRouteIndex = menuItems.findIndex((item) => item.url === currentRoute)
    const lastRouteIndex = menuItems[menuItems.length - 1].index

    const goToPrevItem = () => {
        const prevRoute = menuItems[currentRouteIndex - 1].url
        navigate({ to: prevRoute })
    }

    const goToNextItem = () => {
        const nextRoute = menuItems[currentRouteIndex + 1].url
        navigate({ to: nextRoute })
    }

    return (
        <>
            <Button
                asChild
                variant={null}
                className="absolute right-[calc(64px+12px)] top-8 size-10 rounded-lg border border-neutral-100 bg-white p-2 text-neutral-800 shadow-md"
                onMouseDown={goToPrevItem}
            >
                <motion.button
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={1}
                    className={clsx("group focus:outline-dotted focus:outline-1 focus:outline-slate-800", {
                        hidden: currentRouteIndex === dashboardIndex,
                    })}
                >
                    <ArrowLeft size={24} />
                </motion.button>
            </Button>
            <Button
                asChild
                variant={null}
                className="absolute right-6 top-8 size-10 rounded-lg border border-neutral-100 p-2 text-neutral-800 shadow-md"
                onClick={goToNextItem}
            >
                <motion.button
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={1}
                    className={clsx("group focus:outline-dotted focus:outline-1 focus:outline-slate-800", {
                        hidden: currentRouteIndex === lastRouteIndex,
                    })}
                >
                    <ArrowRight size={24} />
                </motion.button>
            </Button>
        </>
    )
}
