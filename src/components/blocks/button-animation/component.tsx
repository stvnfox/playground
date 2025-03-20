"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const buttonCopy = {
	idle: "Get started",
	loading: <Spinner />,
	success: "Login link sent!",
};

export const ButtonAnimation = () => {
	const [buttonState, setButtonState] = useState<
		"idle" | "loading" | "success"
	>("idle");

	return (
		<div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-md border p-8">
			<Button
				disabled={buttonState !== "idle"}
				className="overflow-hidden! h-8! w-[200px] cursor-pointer px-4 py-2 text-[13px] disabled:cursor-not-allowed"
				onClick={() => {
					// This code is just a placeholder
					setButtonState("loading");

					setTimeout(() => {
						setButtonState("success");
					}, 1750);

					setTimeout(() => {
						setButtonState("idle");
					}, 3500);
				}}
			>
				<AnimatePresence mode="popLayout" initial={false}>
					<motion.span
						key={buttonState}
						transition={{
							type: "spring",
							duration: 0.3,
							bounce: 0,
						}}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
					>
						{buttonCopy[buttonState]}
					</motion.span>
				</AnimatePresence>
			</Button>
		</div>
	);
};
