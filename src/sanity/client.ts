import { createClient } from "next-sanity";
import { projectId, dataset } from './env'
export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
})