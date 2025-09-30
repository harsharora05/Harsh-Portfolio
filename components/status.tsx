
import { SanityDocument } from "next-sanity";
import { StatusIcon } from "../icons/status";
import { client } from "@/sanity/client";

const CURRENT_STAUS_QUERY = `*[
_type == "currentStatus"
]`
export async function Status() {
    const currentStatus = await client.fetch<SanityDocument>(CURRENT_STAUS_QUERY, {}, {
        next: { revalidate: 10800 }
    });

    return <div className="flex w-fit items-center gap-1 bg-white-200 border border-gray-50 px-3 py-1 rounded-full">
        <StatusIcon color={currentStatus[0].color} />
        <p className="text-gray-400">{currentStatus[0].title}</p>
    </div>
}