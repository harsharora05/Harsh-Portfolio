"use client";
import { useMediaQuery } from "react-responsive"
import { Chip } from "./chip"



export function Filters(props: {
    categories: string[]
}) {
    const isMobileView = useMediaQuery({ maxWidth: 542 })
    return <div className="flex gap-3 projxsm:gap-5 mt-5">
        {props.categories.map((category, index) => <Chip key={index} value={category} type={isMobileView ? "small" : "large"} secondaryType="small" style={"hover:cursor-pointer"} />)}
    </div>
}