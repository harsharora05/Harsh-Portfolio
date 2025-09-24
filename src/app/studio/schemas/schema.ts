
import { type SchemaTypeDefinition } from 'sanity'
// 1. Make sure ALL your schemas are imported
import project from './project'
import skillCategory from './skills'
import experience from './experience'
import currentStatus from './currentTitle'
import projectCategories from './projectCategories'
import resume from './resume'

export const schema: { types: SchemaTypeDefinition[] } = {
    // 2. Make sure ALL their names are in this array
    types: [project, skillCategory, experience, currentStatus, projectCategories, resume],
}