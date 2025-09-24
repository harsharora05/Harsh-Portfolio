import { SanityDocument } from "next-sanity"
import { ExperienceSubContainer } from "./experienceSubContainer"

export function ExperienceContainer(props: {
    experiences: SanityDocument
}) {
    return <div className="mt-12 border border-gray-50 bg-gray-25 flex flex-col flex-wrap max-w-4xl relative p-5 rounded-2xl mb-20">
        <div>
            <h1 className="font-bold text-3xl mb-2">My Journey</h1>
            <h4 className="text-xl mb-2 text-gray-200">Experience & Education Timeline</h4>
        </div>

        <div className="absolute w-[3px]  bg-gradient-to-r from-blue-200 to-purple-200 top-30 bottom-6  abtxsm:left-15 rounded-xl"></div>

        {props.experiences.map((exp: SanityDocument) => <ExperienceSubContainer key={exp._id} title={exp.title}
            company={exp.company} duration={exp.duration} location={exp.location} description={exp.description} />)}
    </div>

}