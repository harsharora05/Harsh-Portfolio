import { Chip } from "../../../components/chip";
import { CurrentRoleBox } from "../../../components/currentRoleBox";
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
        <h1 className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-bold text-5xl py-1">About Me</h1>
        <TypewriterEffectSmooth words={words} className={"text-gray-200 text-2xl"} cursorClassName="h-7" />
        <h6 className="mt-6 text-gray-100 text-lg text-center w-200">I’m a dedicated software developer passionate about building innovative solutions and seamless user experiences. With expertise in full-stack development, I transform ideas into reality through clean, efficient code and thoughtful design.</h6>

        <CurrentRoleBox />
        <SkillsContainer />


        <div className="mt-12 border border-gray-50 bg-gray-25 w-4xl relative p-5 rounded-2xl mb-20">
            <div>
                <h1 className="font-bold text-3xl mb-2">My Journey</h1>
                <h4 className="text-xl mb-2 text-gray-200">Experience & Education Timeline</h4>
            </div>

            <div className="absolute w-[3px]  bg-gradient-to-r from-blue-200 to-purple-200 top-30 bottom-6 left-15 rounded-xl"></div>

            <div className="w-2xl bg-white ml-20 mt-10 px-6 py-4 shadow-sm shadow-gray-100 border border-gray-50 hover:border-blue-200   rounded-xl flex flex-col gap-4">
                <div className="absolute bg-blue-200 rounded-full h-5 w-5 left-[51.5px] z-1 "></div>
                <h1 className="font-bold text-2xl">Software Engineer (Part-time)</h1>
                <h4 className="font-semibold text-xl text-blue-200">Cynos Nexus</h4>
                <div className="flex gap-4 mt-2">
                    <Chip type="small" value="duration" />
                    <Chip type="small" value="location" />
                </div>
                <div className="">
                    As a Full Stack Developer, I design, develop, and maintain scalable web and mobile applications. My role involves building responsive UIs, developing RESTful APIs, integrating databases, and ensuring seamless user experiences. I work with modern technologies such as MERN stack, Django, and Flutter, contributing to both frontend and backend development while optimizing performance and code quality.
                </div>
            </div>

            <div className="w-2xl bg-white ml-20 mt-10 px-6 py-4 shadow-sm shadow-gray-100 border border-gray-50 hover:border-blue-200   rounded-xl flex flex-col gap-4">
                <div className="absolute bg-blue-200 rounded-full h-5 w-5 left-[51.5px] z-1 "></div>
                <h1 className="font-bold text-2xl">Software Engineer (Part-time)</h1>
                <h4 className="font-semibold text-xl text-blue-200">Cynos Nexus</h4>
                <div className="flex gap-4 mt-2">
                    <Chip type="small" value="duration" />
                    <Chip type="small" value="location" />
                </div>
                <div className="">
                    As a Full Stack Developer, I design, develop, and maintain scalable web and mobile applications. My role involves building responsive UIs, developing RESTful APIs, integrating databases, and ensuring seamless user experiences. I work with modern technologies such as MERN stack, Django, and Flutter, contributing to both frontend and backend development while optimizing performance and code quality.
                </div>
            </div>


        </div>
    </div>
}