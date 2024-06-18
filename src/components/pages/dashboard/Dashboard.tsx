import { FunctionComponent } from "react"
import { motion } from "framer-motion"

export const Dashboard: FunctionComponent = () => {
    const textVariants = [
        {
            text: "Hi! Welcome to <br /> my playground",
            transition: { duration: 1, delay: 1.5, repeat: 1, repeatType: "reverse" }
        },
        {
            text: "The place where my <br /> ideas come to life",
            transition: { duration: 1, delay: 3.65, repeat: 1, repeatType: "reverse" }
        },
        {
            text: "I hope you will enjoy <br /> this just as i do!",
            transition: { duration: 1, delay: 5.7 }
        }
    ]

    return (
        <section className="overflow-y-auto overflow-x-hidden">
            <div className="container flex min-h-screen translate-x-4 items-center justify-center p-2 md:translate-x-16 lg:w-1/2">
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }}
                    src="/stvn.webp"
                    className="h-32 w-32 rounded-full border-4 border-black will-change-transform md:h-40 md:w-40"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.1 } }}
                    className="speech-bubble font-cartoon left-[45%] top-[25%] -translate-x-10 -translate-y-24 text-lg font-medium will-change-transform md:-translate-x-16 md:-translate-y-32 md:text-2xl"
                >
                    {textVariants.map((text, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={ text.transition }
                            className="absolute left-1/2 -translate-x-1/2 w-full"
                            dangerouslySetInnerHTML={{ __html: text.text }}
                        />
                    ))}
                </motion.p>
            </div>
        </section>
    )
}
