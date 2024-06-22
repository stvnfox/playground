import { FunctionComponent, useEffect, useState } from "react"
import { MenuIcon } from "lucide-react"
import { motion } from "framer-motion"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import clsx from "clsx"
import { Link, useLocation } from "@tanstack/react-router"
import { menuItems } from "@/lib/navigation"

export const Sidebar: FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState<number | null>(null)
    const location = useLocation()

    useEffect(() => {
        const url = location.pathname
        const index = menuItems.findIndex((item) => item.url === url)
        setActiveTab(index)
    }, [location.pathname])

    return (
        <Sheet>
            <SheetTrigger
                asChild
                className="absolute left-6 top-8 z-50 flex size-10 cursor-pointer items-center justify-center rounded-lg border border-neutral-100 text-neutral-800 shadow-md"
            >
                <motion.button
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={1}
                    className="group will-change-transform focus:outline-dotted focus:outline-1 focus:outline-slate-800"
                >
                    <MenuIcon size={24} />
                </motion.button>
            </SheetTrigger>
            <SheetContent
                className="w-auto sm:w-[300px]"
                side="left"
            >
                <SheetHeader>
                    <SheetTitle className="mb-3">Playground</SheetTitle>
                    <SheetDescription>
                        {menuItems.map((item, index) => (
                            <SheetClose
                                asChild
                                key={index}
                            >
                                <Link
                                    to={item.url}
                                    aria-label={item.ariaLabel}
                                    className={clsx(
                                        "relative -mx-2 block rounded p-2 transition-colors last:mb-0 focus:outline-dotted focus:outline-1 focus:outline-slate-800",
                                        activeTab === item.index ? "text-slate-900" : "text-neutral-700"
                                    )}
                                    onMouseOver={() => setActiveTab(item.index)}
                                    onMouseLeave={() => setActiveTab(null)}
                                    onFocus={() => setActiveTab(item.index)}
                                >
                                    {activeTab === item.index ? (
                                        <motion.span
                                            layoutId="highlight"
                                            className="absolute inset-0 rounded bg-gray-700/5"
                                        />
                                    ) : null}
                                    <span className="relative text-inherit">{item.label}</span>
                                </Link>
                            </SheetClose>
                        ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
