import { DarkIcon } from "../icons/dark";
import { EmailIcon } from "../icons/email";
import { GithubIcon } from "../icons/github";
import { LightIcon } from "../icons/light";
import { LinkedinIcon } from "../icons/linkedin";

export function TopNavBar() {
    return <div className="sticky top-0 flex justify-between px-8 py-5 z-10">
        <div className="flex gap-4">
            <LinkedinIcon />
            <GithubIcon />
            <EmailIcon />
        </div>

        <div>
            <LightIcon />
        </div>
    </div>
}