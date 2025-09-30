"use client";
import { LightIcon } from "../icons/light";
import { DarkIcon } from "../icons/dark";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeIcons() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component only renders after hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    console.log(resolvedTheme);

    return (
        <div
            className="hover:cursor-pointer transition-none"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            {resolvedTheme === "dark" ? <LightIcon /> : <DarkIcon />}
        </div>
    );
}
