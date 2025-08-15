"use client";
import clsx from "clsx";
import { button } from "motion/react-client"
import { ReactElement } from "react"

type style = Record<string, string>;
let BtnStyle: style = {
    Primary: "bg-blue-200 text-white ",
    Secondary: "bg-white text-black-600 border border-gray-50"
}

export function Button(props: {
    type: "Primary" | "Secondary"
    logo: ReactElement
    text: string
    click?: () => void
}) {

    return <button className={clsx(BtnStyle[props.type], "flex rounded-full px-4 py-2 gap-2 text-md")} onClick={props.click} > <span>{props.logo}</span>{props.text}</button >

}