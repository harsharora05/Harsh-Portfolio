import { SanityDocument } from "next-sanity";
import { SkillSubContainer } from "./skillSubContainer";


export function SkillsContainer(props: {
    skillCategories: SanityDocument
}) {
    return <div className="mt-12 border border-gray-50 bg-gray-25 max-w-4xl p-5 rounded-2xl">
        <div>
            <h1 className="font-bold text-3xl mb-2">Technical Skills</h1>
        </div>

        <div className="flex max-w-4xl flex-wrap gap-4 abtsm:gap-8 abtmd:gap-3 justify-center p-2">
            {props.skillCategories.map((skillCategory: SanityDocument) => <SkillSubContainer key={skillCategory._id} title={skillCategory.category} skills={skillCategory.skills} />)}

        </div>
    </div>
}