"use client";
import Projects from "@/app/(main)/projects/page";
import useProjectStore from "@/state/projectFilterState";
import { SanityDocument } from "next-sanity";
import { useEffect } from "react";
import { ProjectCard } from "./projectCard";
import { ComingSoon } from "./comingSoon";


export function ProjectList(props: {
    projects: SanityDocument[]
}) {
    const filteredProjects = useProjectStore(state => state.filteredProjects);
    const setProjects = useProjectStore(state => state.setProjects);

    useEffect(() => {
        setProjects(props.projects);
    }, [props.projects, setProjects]);
    return filteredProjects.length ? <div className="grid grid-cols-1 projsm:grid-cols-2 projmd:grid-cols-3 justify-center  mt-6 gap-6 mb-3">
        {filteredProjects.map((project, index) => <ProjectCard key={project._id} image={project.image.asset.url} tag={project.tag} title={project.title} decription={project.description} techStack={project.techStack} liveLink={project.liveLink} githubLink={project.githubLink} />)}
    </div> : <div className="flex items-center justify-center w-full h-64 mt-6">
        <ComingSoon />
    </div>

}