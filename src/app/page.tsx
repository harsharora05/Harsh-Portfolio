import { Button } from "../../components/button";
import { Status } from "../../components/status";
import { BackgroundIcon } from "../../icons/bgIcon";
import { DownloadIcon } from "../../icons/download";
import { ProjectIcon } from "../../icons/project";

export default function App() {
  return <div className="flex min-h-[calc(100vh-200px)] items-center justify-center overflow-hidden ">
    <div className="flex w-200 h-100 p-6 ">
      <div className="flex-1 ">
        <Status />
        <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mt-5">Hi, I'm Harsh Arora </h1>
        <h4 className="mt-3 text-gray-400 text-xl">
          Full-Stack & Flutter Developer
        </h4>
        <h2 className="mt-3 text-gray-100 text-md">
          Passionate about crafting high-performance web and mobile apps, with a focus on clean, scalable solutions and great user experiences.
        </h2>
        <div className="mt-5 flex gap-3">
          <Button type="Primary" logo={<ProjectIcon />} text="My Work" />
          <Button type="Secondary" logo={<DownloadIcon />} text="Resume" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <BackgroundIcon />
        <img className="h-40 z-10" src="harsh.png" alt="" />
      </div>
    </div>
  </div>
}