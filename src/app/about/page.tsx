import { Chip } from "../../../components/chip";
import { CurrentRoleBox } from "../../../components/currentRoleBox";
import { ExperienceContainer } from "../../../components/experienceContainer";
import { TypewriterEffectSmooth } from "../../../components/flipWords";
import { SkillsContainer } from "../../../components/skillContainer";

export default function About() {
    const journey = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            duration: "March 2023 - Present",
            description: [
                "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and conducting code reviews",

            ]
        },
        {
            title: "Bachelor of Computer Science",
            company: "University of Technology",
            duration: "2015 - 2019",
            description: [
                "Graduated with First Class Honors (GPA: 3.8/4.0),Specialized in software engineering and web technologies",
            ]
        },
        {
            title: "Full Stack Web Development Bootcamp",
            company: "Code Academy",
            duration: "2018",
            description: "Intensive 6-month program covering modern web development stack,Mastered React, Express, MongoDB, and Node.js (MERN stack)",
        },
    ];

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

        <CurrentRoleBox />
        <SkillsContainer />

        <ExperienceContainer />

    </div>
}