import { SkillSubContainer } from "./skillSubContainer";

type SkillSet = { category: string, skills: string[] };
export function SkillsContainer() {

    const details: SkillSet[] = [
        {
            category: "Frontend",
            skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "Python", "Django", "REST API", "GraphQL"]
        },
        {
            category: "Database",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
        },
        {
            category: "Libraries & Frameworks",
            skills: ["React Router", "Redux", "Material-UI", "Bootstrap", "Mongoose", "Axios"]
        },
        {
            category: "Tools & Development",
            skills: ["VS Code", "Git", "Webpack", "Vite", "Postman", "Figma"]
        },
        {
            category: "DevOps & Cloud",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Vercel"]
        }
    ];
    return <div className="mt-12 border border-gray-50 bg-gray-25 max-w-4xl p-5 rounded-2xl">
        <div>
            <h1 className="font-bold text-3xl mb-2">Technical Skills</h1>
        </div>

        <div className="flex max-w-4xl flex-wrap gap-4 abtsm:gap-8 abtmd:gap-3 justify-center p-2">
            {details.map((detail: SkillSet) => <SkillSubContainer key={detail.category} title={detail.category} skills={detail.skills} />)}

        </div>
    </div>
}