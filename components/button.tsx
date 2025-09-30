"use client";
import clsx from "clsx";
import { ReactElement } from "react"


const BtnStyle = new Map<string, string>([
    ["Primary", "bg-blue-200 text-white"],
    ["Secondary", "border border-gray-50 bg-white-200 text-gray-400"]
])

export function Button(props: {
    type: "Primary" | "Secondary"
    logo?: ReactElement
    text: string
    click?: () => void
}) {

    return <button className={clsx(BtnStyle.get(props.type), "flex rounded-full px-6 py-2 gap-2 text-md hover:cursor-pointer")} onClick={props.click} > <span>{props.logo}</span>{props.text}</button >

}