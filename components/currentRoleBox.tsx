import { SanityDocument } from "next-sanity";
import { ProjectIcon } from "../icons/project";

export function CurrentRoleBox(props: {
    currentRole: SanityDocument
}) {
    return <div className="mt-6 border border-gray-50 bg-gradient-to-r from-blue-200 to-purple-200 max-w-4xl text-center flex items-center flex-col p-5 rounded-2xl">
        <h1 className="font-bold text-white text-2xl flex justify-content">Current Role</h1>
        <h2 className="mt-3 text-black-800 font-semibold text-2xl">{props.currentRole.title}</h2>
        <p className="text-white font-semibold text-lg">{props.currentRole.company}</p>
        <p className="text-white text-sm">{props.currentRole.duration}</p>
        <p className="text-white text-md mt-3">{props.currentRole.description}</p>

    </div>
}