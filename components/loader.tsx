"use client";
import { easeInOut, motion } from "motion/react";
import React from "react";

export const LoaderOne = () => {
    const transition = (x: number) => {
        return {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop" as const,
            delay: x * 0.1,
            ease: easeInOut,
        };
    };
    return (
        <div className="flex items-center gap-2">
            <motion.div
                initial={{
                    y: 0,
                }}
                animate={{
                    y: [0, 30, 0],
                }}
                transition={transition(0)}
                className="h-4 w-4 rounded-full border  border-blue-200 bg-gradient-to-b from-purple-200 to-blue-200"
            />
            <motion.div
                initial={{
                    y: 0,
                }}
                animate={{
                    y: [0, 30, 0],
                }}
                transition={transition(1)}
                className="h-4 w-4 rounded-full border border-blue-200 bg-gradient-to-b from-purple-200 to-blue-200"
            />
            <motion.div
                initial={{
                    y: 0,
                }}
                animate={{
                    y: [0, 30, 0],
                }}
                transition={transition(2)}
                className="h-4 w-4 rounded-full border  border-blue-200 bg-gradient-to-b from-purple-200 to-blue-200"
            />
        </div>
    );
};
