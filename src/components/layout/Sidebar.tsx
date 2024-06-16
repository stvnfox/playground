import { FunctionComponent } from "react"
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
import { Link } from "@tanstack/react-router"
import { menuItems } from "@/lib/navigation"

export const Sidebar: FunctionComponent = () => {
    return (
        <Sheet>
            <SheetTrigger
                asChild
                className="absolute left-6 top-8 cursor-pointer rounded-lg border border-neutral-100 p-2 text-neutral-800 shadow-md"
            >
                <motion.button
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={1}
                    className="group focus:outline-dotted focus:outline-1 focus:outline-slate-800"
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
                                    className="-mx-2 mb-1 block rounded p-2 text-slate-800 transition-colors last:mb-0 hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:outline-dotted focus:outline-1 focus:outline-slate-800 [&.active]:bg-neutral-100 [&.active]:text-slate-900"
                                >
                                    {item.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
