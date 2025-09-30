import { Chip } from "./chip";

export function ExperienceSubContainer(props: {
    title: string,
    company: string,
    duration: string,
    location: string,
    description: string
}) {
    return <div className="max-w-4xl bg-white ml-10 abtxsm:ml-20 mt-10 px-6 py-4 shadow-sm shadow-gray-100 border border-gray-50 hover:border-blue-200 bg-white-200  rounded-xl flex flex-col gap-4">


        <div className="absolute left-[10px] abtxsm:left-[49.5px] flex items-center justify-center">
            {/* Outer Blue Circle */}
            <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full h-6 w-6 flex items-center justify-center">
                {/* Middle White Circle */}
                <div className="bg-white rounded-full h-5 w-5 flex items-center justify-center">
                    {/* Inner Blue Dot */}
                    <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full h-3 w-3"></div>
                </div>
            </div>
        </div>


        <h1 className="font-bold text-xl abtxsm:text-2xl">{props.title}</h1>
        <h4 className="font-semibold text-lg abtxsm:text-xl text-blue-200">{props.company}</h4>
        <div className="flex gap-4 mt-2">
            <Chip type="small" value={props.duration} />
            <Chip type="small" value={props.location} />
        </div>
        <div className="text-md abtxsm:ext-lg">
            {props.description}
        </div>
    </div>

}