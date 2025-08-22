import { AboutIcon } from "../icons/about";
import { HomeIcon } from "../icons/home";
import { ProjectIcon } from "../icons/project";
import { BottomNavBarItem } from "./BNavbarItem";

export function BottomNavBar() {
    return <div className="flex w-lg bg-white-200 rounded-full px-3 py-4 justify-around fixed bottom-10 left-1/2 -translate-x-1/2 border border-gray-50">
        <BottomNavBarItem icon={<HomeIcon />} title="Home" />
        <BottomNavBarItem icon={<AboutIcon />} title="About" />
        <BottomNavBarItem icon={<ProjectIcon color={"currentColor"} size={"6"} />} title="Projects" />
    </div >
}