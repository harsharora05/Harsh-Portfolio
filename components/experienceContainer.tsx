import { ExperienceSubContainer } from "./experienceSubContainer"

export function ExperienceContainer() {
    return <div className="mt-12 border border-gray-50 bg-gray-25 flex flex-col flex-wrap max-w-4xl relative p-5 rounded-2xl mb-20">
        <div>
            <h1 className="font-bold text-3xl mb-2">My Journey</h1>
            <h4 className="text-xl mb-2 text-gray-200">Experience & Education Timeline</h4>
        </div>

        <div className="absolute w-[3px]  bg-gradient-to-r from-blue-200 to-purple-200 top-30 bottom-6  abtxsm:left-15 rounded-xl"></div>

        <ExperienceSubContainer title="Software Engineer (Part-time)" company="Cynos Nexus" duration="2 Months" location="Remote" description="As a Full Stack Developer, I design, develop, and maintain scalable web and mobile applications. My role involves building responsive UIs" />
        <ExperienceSubContainer title="Software Engineer (Part-time)" company="Cynos Nexus" duration="2 Months" location="Remote" description="As a Full Stack Developer, I design, develop, and maintain scalable web and mobile applications. My role involves building responsive UIs" />
        <ExperienceSubContainer title="Software Engineer (Part-time)" company="Cynos Nexus" duration="2 Months" location="Remote" description="As a Full Stack Developer, I design, develop, and maintain scalable web and mobile applications. My role involves building responsive UIs" />


    </div>

}