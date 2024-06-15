import { useRef, type FunctionComponent } from "react"
import { motion } from "framer-motion"

type FaqItemProps = {
    question: string
    answer: string
}

export const FaqItem: FunctionComponent<FaqItemProps> = ({ question, answer }) => {
    const ref = useRef(null)

    return (
        <motion.details
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ margin: "-200px 0px 0px 0px", once: true }}
            className="group mb-2 rounded-lg bg-red-50 transition-colors duration-150 ease-in-out last:mb-0 hover:cursor-pointer hover:bg-red-100"
        >
            <summary className="flex list-none items-center justify-between p-5">
                {question}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 transition-transform duration-200 ease-in-out group-open:rotate-180"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                </svg>
            </summary>
            <div className="p-5 pt-0 font-light">{answer}</div>
        </motion.details>
    )
}
