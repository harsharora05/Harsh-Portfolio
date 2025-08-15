import { StatusIcon } from "../icons/status";

export function Status() {
    return <div className="flex w-fit items-center gap-1 bg-white-200 border border-gray-50 px-3 py-1 rounded-full">
        <StatusIcon color={"lightGreen"} />
        <p className="text-gray-400">Available for Freelance</p>
    </div>
}