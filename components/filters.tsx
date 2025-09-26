"use client";
import { useMediaQuery } from "react-responsive"
import { Chip } from "./chip"
import { SanityDocument } from "next-sanity";
import { useCallback, useEffect, useState } from "react";
import useProjectStore from "@/state/projectFilterState";



export function Filters(props: {
    categories: SanityDocument[]
}) {
    const isMobileView = useMediaQuery({ maxWidth: 542 });
    const [category, setCategory] = useState("All Projects");
    const filter = useProjectStore((state) => state.filter);

    useEffect(() => {
        filter(category);
    }, [category, filter]);

    return <div className="flex gap-3 projxsm:gap-5 mt-5">
        {props.categories.map((cat, index) => <Chip key={index} value={cat.Category} isSelected={cat.Category == category ? true : false} setCategory={setCategory} type={isMobileView ? "small" : "large"} secondaryType="small" style={"hover:cursor-pointer"} />)}
    </div>
}