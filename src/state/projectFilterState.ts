import { SanityDocument } from "next-sanity";
import { create } from "zustand";

type ProjectData = {
    projects: SanityDocument[];
    filteredProjects: SanityDocument[];
    filter: (category: string) => void;
    setProjects: (projects: SanityDocument[]) => void;
};

const useProjectStore = create<ProjectData>((set, get) => ({
    projects: [],
    filteredProjects: [],

    setProjects: (projects) => {
        set({ projects, filteredProjects: projects });
    },

    filter: (category) => {
        const { projects } = get();
        if (category === "All Projects") {
            set({ filteredProjects: projects });
        } else {
            set({ filteredProjects: projects.filter((p) => p.projectType === category) });
        }
    },
}));





export default useProjectStore;




