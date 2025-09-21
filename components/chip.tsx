import clsx from "clsx"

const chipType = new Map<string, string>([
    ["small", "text-sm px-2 py-1"],
    ["large", "text-lg px-4 py-2"],
])

export function Chip(props: {
    value: string
    type: "small" | "large"
    secondaryType?: string,
    style?: string
    hover?: boolean

}) {
    return <div className={clsx(`bg-gray-50 rounded-full ${chipType.get(props.type)} ${props.style}`, props.hover ? "hover:bg-gradient-to-r from-blue-200 to-purple-200 hover:text-white hover:scale-110 cursor-pointer" : "")}>
        {props.value}
    </div>
}