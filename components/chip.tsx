const chipType = new Map<string, string>([
    ["small", "text-sm px-2 py-1"],
    ["large", "text-lg px-4 py-2"],
])

export function Chip(props: {
    value: string
    type: "small" | "large"
    style?: string
}) {
    return <div className={`bg-gray-50 rounded-full ${chipType.get(props.type)} ${props.style}`}>
        {props.value}
    </div>
}