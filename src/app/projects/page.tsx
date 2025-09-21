import clsx from "clsx";
import { TypewriterEffectSmooth } from "../../../components/flipWords";
import { ProjectCard } from "../../../components/projectCard";
import { Filters } from "../../../components/filters";

export default function Projects() {
    const categories = ["All Projects", "Web Apps", "Mobile", "AI"];
    const projects = [
        {
            tag: "featured",
            image: "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
            type: "Web Apps",
            title: "Course Selling Platform",
            decription: "A full-stack application where instructors can upload courses and students can purchase and learn via video lectures.",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
            githubLink: "https://github.com/username/course-selling",
            liveLink: "https://course-selling.vercel.app"
        },
        {
            tag: "completed",
            image: "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
            type: "Mobile",
            title: "Blogging App",
            decription: "A mobile app for users to create, edit, and share blogs with features like authentication and image upload.",
            techStack: ["Flutter", "Firebase", "Dart"],
            githubLink: "https://github.com/username/flutter-blog-app",
            liveLink: "https://play.google.com/store/apps/details?id=flutter.blog.app"
        },
        {
            tag: "in-progress",
            image: "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
            type: "AI",
            title: "AI Personal Knowledge Base",
            decription: "Upload notes and documents to build your second brain. Uses embeddings and vector DB for semantic search and Q&A.",
            techStack: ["LangChain", "Pinecone", "Next.js", "OpenAI API"],
            githubLink: "https://github.com/username/second-brain-ai",
            liveLink: "https://second-brain-ai.vercel.app"
        },
        {
            tag: "completed",
            image: "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
            type: "Web Apps",
            title: "Chat Application",
            decription: "A real-time chat application with group chats, emojis, and file sharing support.",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
            githubLink: "https://github.com/username/chat-app",
            liveLink: "https://chat-app.vercel.app"
        },
        {
            tag: "in-progress",
            image: "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
            type: "Mobile",
            title: "Expense Tracker",
            decription: "A cross-platform mobile app to track income and expenses with interactive charts and reports.",
            techStack: ["Flutter", "SQLite", "Dart"],
            githubLink: "https://github.com/username/expense-tracker",
            liveLink: "https://play.google.com/store/apps/details?id=flutter.expensetracker"
        }
    ];
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
        <div className="grid grid-cols-1 projsm:grid-cols-2 projmd:grid-cols-3 justify-center  mt-6 gap-6 mb-3">
            {projects.map((project, index) => <ProjectCard key={index} image={project.image} tag={project.tag} title={project.title} decription={project.decription} techStack={project.techStack} liveLink={project.liveLink} githubLink={project.githubLink} />)}
        </div>



    </div >
}