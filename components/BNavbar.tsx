"use client";
import Link from "next/link";
import { AboutIcon } from "../icons/about";
import { HomeIcon } from "../icons/home";
import { ProjectIcon } from "../icons/project";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function BottomNavBar() {
    const pathname = usePathname() || '/';
    return <div className="z-10 flex  w-[200px] navmd:w-lg bg-white-200 rounded-full px-2 py-3 navmd:px-3 navmd:py-4 justify-around items-center  fixed bottom-6
    navmd:bottom-10  left-1/2 -translate-x-1/2 border border-gray-50">
        <Link href={"/"}><div className={clsx(pathname == '/' ? "bg-blue-200 px-3 py-2 navmd:px-5 navmd:py-3 rounded-full text-white" : "bg-none text-gray-400", "font-bold  flex gap-2 hover:pointer")} ><span><HomeIcon /></span><span className="hidden navmd:block">Home </span></div></Link>
        <Link href={"/about"}><div className={clsx(pathname == '/about' ? "bg-blue-200 px-5 py-3 rounded-full text-white" : "bg-none text-gray-400", "font-bold  flex gap-2 hover:pointer")} ><span><AboutIcon /></span><span className="hidden navmd:block">About </span></div></Link>
        <Link href={"/projects"}><div className={clsx(pathname == '/projects' ? "bg-blue-200 px-5 py-3 rounded-full text-white" : "bg-none text-gray-400 ", "font-bold  flex gap-2 hover:pointer")}><span><ProjectIcon color={"currentColor"} size={"6"} /></span><span className="hidden navmd:block">Projects</span></div></Link>
    </div >
}