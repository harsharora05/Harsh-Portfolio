
import Link from "next/link";
import { Button } from "./button";
import { Chip } from "./chip";

export function ProjectCard(props: {
    tag: string,
    title: string,
    image: string
    decription: string,
    techStack: string[]
    githubLink: string,
    liveLink: string
}) {
    return <div className="rounded-xl w-[300px] border border-gray-50 ">
        <div className="relative">
            <img src={props.image} alt="" className="rounded-t-xl" />
            <Chip value={props.tag} type={"small"} style="absolute top-2 right-2" />
        </div>
        <div className="p-4">
            <h1 className="text-lg font-bold">{props.title}</h1>
            <p className="text-sm text-gray-100">{props.decription}</p>
            <div className="flex gap-1 flex-wrap mt-3">
                {props.techStack.map((tech: any, index: any) => <Chip key={index} value={tech} type={"small"} />)}
            </div>

            <div className="flex gap-2 mt-4">
                <Link href={props.githubLink} target="_blank"><Button type={"Primary"} text={"GitHub"} /></Link>
                {props.liveLink && <Link href={props.liveLink} target="_blank"> <Button type={"Secondary"} text={"Live Link"} /> </Link>}
            </div>

        </div>
    </div>
}