import React from "react";
import { LoaderOne } from "../../components/loader";


export default function Loading() {
    return <div className="h-screen w-screen flex justify-center items-center -translate-y-30">
        <LoaderOne />
    </div>

}