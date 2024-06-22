import { useState } from "react"
import { motion } from "framer-motion"
import clsx from "clsx"
import { menuItems } from "./_helpers/items"

enum Direction {
    ROW = 'row',
    COLUMN = 'column'
}

export const Navigation = () => {
    const [activeTab, setActiveTab] = useState<number | null>(null)
    const [direction, setDirection] = useState<Direction.ROW | Direction.COLUMN>(Direction.ROW)

    return (
        <div className="container flex flex-col min-h-screen items-center justify-center p-2 lg:w-1/2">
            <nav>
                <motion.ul 
                    className={clsx(
                        "flex gap-4",
                        direction === Direction.ROW ? "flex-row" : "flex-col"
                    )}
                >
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={index}
                            tabIndex={0}
                            className={clsx(
                                "relative cursor-pointer text-sm px-2 py-1 rounded-lg focus:outline-dotted text-center focus:outline-1 focus:outline-slate-800 transition-colors",
                                activeTab === item.index ? "text-gray-900" : "text-gray-700",
                            )}
                            onFocus={() => setActiveTab(item.index)}
                            onMouseOver={() => setActiveTab(item.index)}
                            onMouseLeave={() => setActiveTab(item.index)}
                        >
                            {activeTab === item.index ? (
                                <motion.div
                                    layoutId="tab-indicator"
                                    className="absolute inset-0 rounded-lg bg-gray-700/5"
                                />
                            ) : null}
                            <span>{item.label}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
            <button
                className="p-2 text-gray-800 mt-12 hidden"
                onClick={() => setDirection(direction === Direction.ROW ? Direction.COLUMN : Direction.ROW)}
            >
                Reset
            </button>
        </div>
    )
}
