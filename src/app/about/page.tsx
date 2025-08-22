import { CommonContainer } from "../../../components/commonContainer";
import { CurrentRoleBox } from "../../../components/currentRoleBox";
import { SkillsContainer } from "../../../components/skillContainer";

export default function About() {
    const experience = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            duration: "March 2023 - Present",
            description: [
                "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and conducting code reviews",

            ]
        },
    ],

        education = [
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
    return <div className="flex items-center flex-col p-6 mb-20">
        <h1 className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-bold text-5xl ">About Me</h1>

        <h3 className="mt-5 text-gray-200 text-2xl">Transforming ideas into seamless digital experiences.</h3>
        <h6 className="mt-6 text-gray-100 text-lg text-center w-200">I’m a dedicated software developer passionate about building innovative solutions and seamless user experiences. With expertise in full-stack development, I transform ideas into reality through clean, efficient code and thoughtful design.</h6>

        <CurrentRoleBox />
        <SkillsContainer />
        <div className="w-4xl flex gap-12 mt-10 mb-5">
            <CommonContainer heading="Experience" information={experience} style={"-rotate-4 hover:rotate-0"} />
            <CommonContainer heading="Education" information={education} style={"rotate-2 hover:rotate-0"} />

        </div>
    </div>
}