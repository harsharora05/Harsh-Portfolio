import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skillCategory',
    title: 'Skill Category',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Category Name',
            description: 'The name of the skill category (e.g., DevOps & Cloud).',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            description: 'A list of skills belonging to this category.',
            type: 'array',
            of: [{ type: 'string' }], // This creates an array of text fields
        }),
    ],
})