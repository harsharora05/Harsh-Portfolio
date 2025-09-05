import { Chip } from "./chip"

export function SkillSubContainer(props: {
    title: string,
    skills: string[]
}) {
    return <div className="w-[270px] bg-white px-6 py-4 shadow-sm shadow-gray-100 border border-gray-50 hover:border-blue-200   rounded-xl flex flex-col gap-4" >
        <div className="border-b border-gray-50 py-3">
            <h1 className="text-black text-lg font-bold">{props.title}</h1>
        </div>
        <div className="flex flex-wrap gap-3 border-gray-50">
            {props.skills.map((skill) => <Chip type="small" key={skill} hover={true} value={skill} />)}
        </div>
    </div>
}