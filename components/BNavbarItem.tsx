import { ReactElement } from "react";

export function BottomNavBarItem(props: { icon: ReactElement, title: string }) {
    return <div className="font-bold  text-gray-200 flex gap-2" ><span>{props.icon}</span>{props.title}</div>
}