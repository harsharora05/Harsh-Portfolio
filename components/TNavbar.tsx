import Link from "next/link";
import { DarkIcon } from "../icons/dark";
import { EmailIcon } from "../icons/email";
import { GithubIcon } from "../icons/github";
import { LightIcon } from "../icons/light";
import { LinkedinIcon } from "../icons/linkedin";
import { TwitterIcon } from "../icons/twitter";

export function TopNavBar() {
    return <div className="sticky top-0 flex justify-between px-8 py-5 z-10">
        <div className="flex items-center gap-4 hover:cursor-pointer">
            <Link href={"https://www.linkedin.com/in/harsh17052"} target="_blank"><LinkedinIcon /></Link>
            <Link href={"https://x.com/aroraharsh17"} target="_blank"><TwitterIcon /></Link>
            <Link href={"https://github.com/harsharora05"} target="_blank"><GithubIcon /></Link>
            <Link href={"mailto:harsh.official995@gmail.com"} target="_blank"><EmailIcon /></Link>
        </div>

        <div className="hover:cursor-pointer">
            <LightIcon />
        </div>
    </div>
}