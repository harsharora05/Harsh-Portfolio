"use client";
import { useMediaQuery } from "react-responsive"
import { Chip } from "./chip"
import { SanityDocument } from "next-sanity";



export function Filters(props: {
    categories: SanityDocument[]
}) {
    const isMobileView = useMediaQuery({ maxWidth: 542 })
    return <div className="flex gap-3 projxsm:gap-5 mt-5">
        {props.categories.map((cat, index) => <Chip key={index} value={cat.Category} type={isMobileView ? "small" : "large"} secondaryType="small" style={"hover:cursor-pointer"} />)}
    </div>
}