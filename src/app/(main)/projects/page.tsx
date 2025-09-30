import { TypewriterEffectSmooth } from "../../../../components/flipWords";
import { Filters } from "../../../../components/filters";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { ProjectList } from "../../../../components/projectList";

const PROJECT_QUERY = `*[
  _type == "project"
]{
  _id,
  title,
  tag,
  description,
  techStack,
  liveLink,
  projectType,
  githubLink,
  image{
    asset->{
      _id,
      url
    }
  }
}`;

const PROJECT_CATEGORIES_QUERY = `*[
_type == "projectCategory"]{
Category
}`;
export default async function Projects() {
    const categories = await client.fetch<SanityDocument[]>(PROJECT_CATEGORIES_QUERY, {}, {
        next: { revalidate: 10800 }
    });
    const projects = await client.fetch<SanityDocument[]>(PROJECT_QUERY, {}, {
        next: { revalidate: 10800 }
    });

    const words = [
        {
            text: "Demonstrating",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "my",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "progress",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "and",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "technical",
            classname: "mt-5 text-gray-200 text-xl",
        },
        {
            text: "capabilities.",
            classname: "mt-5 text-gray-200 text-xl",
        }
    ]

    return <div className="flex items-center flex-col p-6 mb-26">
        <h1 className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-bold text-4xl projxsm:text-5xl py-1">My Projects</h1>
        <TypewriterEffectSmooth words={words} className={"text-gray-200 text-sm projxsm:text-xl projsm:text-2xl "} cursorClassName="h-7" />
        <Filters categories={categories} />
        <ProjectList projects={projects} />



    </div >
}