export function Chip(props: {
    value: string
}) {
    return <div className="text-sm bg-gray-50 rounded-full px-2 py-1">
        {props.value}
    </div>
}