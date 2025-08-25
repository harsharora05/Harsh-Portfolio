"use client";
import Link from "next/link";
import { AboutIcon } from "../icons/about";
import { HomeIcon } from "../icons/home";
import { ProjectIcon } from "../icons/project";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function BottomNavBar() {
    const pathname = usePathname();
    return <div className="flex w-lg bg-white-200 rounded-full px-3 py-4 justify-around items-center fixed bottom-10 left-1/2 -translate-x-1/2 border border-gray-50">
        <Link href={"/"}><div className={clsx(pathname == '/' ? "bg-blue-200 px-5 py-3 rounded-full text-white" : "bg-none text-gray-200", "font-bold  flex gap-2 hover:pointer")} ><span><HomeIcon /></span>Home</div></Link>
        <Link href={"/about"}><div className={clsx(pathname == '/about' ? "bg-blue-200 px-5 py-3 rounded-full text-white" : "bg-none text-gray-200", "font-bold  flex gap-2 hover:pointer")} ><span><AboutIcon /></span>About</div></Link>
        <Link href={"/projects"}><div className={clsx(pathname == '/projects' ? "bg-blue-200 px-5 py-3 rounded-full text-white" : "bg-none text-gray-200 ", "font-bold  flex gap-2 hover:pointer")}><span><ProjectIcon color={"currentColor"} size={"6"} /></span>Projects</div></Link>
    </div >
}