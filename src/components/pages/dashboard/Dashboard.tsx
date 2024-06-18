import { FunctionComponent } from "react"

export const Dashboard: FunctionComponent = () => {
    return (
        <section className="overflow-x-hidden overflow-y-auto">
            <div className="container min-h-screen lg:w-1/2 flex items-center justify-center p-2 translate-x-4 md:translate-x-16">
                <img src="/stvn.webp" className="rounded-full border-4 border-black h-32 w-32 md:h-40 md:w-40"/>
                <h1 className="speech-bubble left-[45%] top-[25%] font-cartoon font-medium text-lg md:text-2xl -translate-y-24 -translate-x-10 md:-translate-y-32 md:-translate-x-16">Hi! Welcome to <br/> my playground.</h1>
            </div>
        </section>
    )
}