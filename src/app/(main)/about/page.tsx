import { SanityDocument } from "next-sanity";
import { CurrentRoleBox } from "../../../../components/currentRoleBox";
import { ExperienceContainer } from "../../../../components/experienceContainer";
import { TypewriterEffectSmooth } from "../../../../components/flipWords";
import { SkillsContainer } from "../../../../components/skillContainer";
import { client } from "@/sanity/lib/client";


const EXPERIENCE_QUERY = `*[
_type == "experience"
]| order(_createdAt desc)`;

const SKILL_QUERY = `*[
_type == "skillCategory"
]`;

export default async function About() {
    const experiences = await client.fetch<SanityDocument>(EXPERIENCE_QUERY);
    const skillCategories = await client.fetch<SanityDocument>(SKILL_QUERY);
    const currentRole = experiences[0];


    const words = [
        {
            text: "Transforming",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "ideas",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "into",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "seamless",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "digital",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "experiences.",
            classname: "mt-5 text-gray-200 text-xl",
        }
    ]

    return <div className="flex items-center flex-col p-6 mb-10">
        <h1 className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-bold text-4xl  projxsm:text-5xl py-1">About Me</h1>
        <TypewriterEffectSmooth words={words} className={"text-gray-200 text-sm projxsm:text-xl projsm:text-2xl"} cursorClassName="h-7" />

        <h6 className="mt-6 text-gray-100 text-lg text-center  max-w-200">I’m a dedicated software developer passionate about building innovative solutions and seamless user experiences. With expertise in full-stack development, I transform ideas into reality through clean, efficient code and thoughtful design.</h6>

        <CurrentRoleBox currentRole={currentRole} />
        <SkillsContainer skillCategories={skillCategories} />

        <ExperienceContainer experiences={experiences} />

    </div>
}