import { Button } from "../../components/button";
import { Status } from "../../components/status";
import { BackgroundIcon } from "../../icons/bgIcon";
import { DownloadIcon } from "../../icons/download";
import { WorkIcon } from "../../icons/work";
import Link from "next/link";
export default function App() {
  return <div className="flex firstmd:min-h-[calc(100vh-200px)] firstmd:items-center firstmd:justify-center firstmd:overflow-hidden mb-25">
    <div className="flex flex-col firstmd:flex-row firstmd:w-200 firstmd:h-100 p-6 ">
      <div className="flex-1 py-5 firstmd:py-0">
        <Status />
        <h1 className="font-bold text-4xl firstsm:text-5xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mt-5">Hi, I'm Harsh Arora </h1>
        <h4 className="mt-3 text-gray-400 text-xl">
          Full-Stack & Flutter Developer
        </h4>
        <h2 className="mt-3 text-gray-100 text-md">
          Passionate about crafting high-performance web and mobile apps, with a focus on clean, scalable solutions and great user experiences.
        </h2>
        <div className="mt-3 firstsm:mt-5 flex gap-3">
          <Link href={'/projects'}><Button type="Primary" logo={<WorkIcon />} text="My Work" /></Link>
          <Button type="Secondary" logo={<DownloadIcon />} text="Resume" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mt-12 mb-12 firstsm:mb-0 firstmd:mt-0 ">
        <BackgroundIcon />
        <img className="h-40 z-10" src="harsh.png" alt="" />
      </div>
    </div>
  </div>
}